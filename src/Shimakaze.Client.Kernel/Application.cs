using System.Reflection;
using System.Text;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using StreamJsonRpc;

using Tomlyn.Model;

namespace Shimakaze.Client.Kernel;

public interface IJsonRpcHandler
{
}

public sealed record ShimakazeConfiguration(TomlTable Data)
{
    public object this[string index]
    {
        get => Data[index];
        set => Data[index] = value;
    }
}

public sealed class Application : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;

    public Application(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        await using var stdin = Console.OpenStandardInput();
        await using var stdout = Console.OpenStandardOutput();
        await using var handler = new NewLineDelimitedMessageHandler(
            stdout,
            stdin,
            new JsonMessageFormatter(new UTF8Encoding(false))
        );
        using var jrpc = new JsonRpc(handler);
        HashSet<string> supportMethods = new();
        foreach (var item in _serviceProvider.GetServices<IJsonRpcHandler>())
        {
            // TODO: 这段代码由New Bing生成，略微修改
            // 定义一个静态字段，用于缓存Object类的方法名
            HashSet<string> objectMethodNames = new(
                // 使用Linq调用链获取Object类的方法名
                typeof(object).GetMethods().Select(m => m.Name)
            );
            // 修改帮助类的方法，使用缓存的字段，而不是每次都反射Object类的成员
            IEnumerable<string>? GetMethodNames(Type? type) =>
                type?.GetMethods().Select(method =>
                    method.GetCustomAttribute<JsonRpcMethodAttribute>()?.Name ?? method.Name
                )
                // 使用缓存的字段，过滤掉Object类的方法
                .Where(name => !objectMethodNames.Contains(name));

            var names = GetMethodNames(item.GetType());

            if (names is not null)
                foreach (var name in names)
                    supportMethods.Add(name);

            jrpc.AddLocalRpcTarget(item);
        }

        jrpc.AddLocalRpcMethod("system/methods", () => supportMethods);

        jrpc.StartListening();
        await jrpc.Completion;
    }
}