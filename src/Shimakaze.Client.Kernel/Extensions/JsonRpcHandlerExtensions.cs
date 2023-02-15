using System.Diagnostics;

using Microsoft.Extensions.DependencyInjection;

namespace Shimakaze.Client.Kernel.Extensions;

public static class JsonRpcHandlerExtensions
{
    public static IServiceCollection AddLocalRpcTargets(this IServiceCollection services)
    {
        foreach (var type in AppDomain.CurrentDomain
            .GetAssemblies()
            .SelectMany(asm => asm.GetExportedTypes())
            .Where(type => type.IsAssignableTo(typeof(IJsonRpcHandler)) && type.IsClass))
        {
            Debug.WriteLine(type.FullName);
            services.AddSingleton(typeof(IJsonRpcHandler), type);
        }
        return services;
    }
}