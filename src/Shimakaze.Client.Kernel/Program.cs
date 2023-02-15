// See https://aka.ms/new-console-template for more information
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using Shimakaze.Client.Kernel;
using Shimakaze.Client.Kernel.Extensions;

await Host.CreateDefaultBuilder(args)
    .ConfigureLogging(logger => logger
        .AddJsonConsole()
    )
    .ConfigureServices(services => services
        .AddTomlFile(@"Assets/config.toml")
        .AddHostedService<Application>()
        .AddLocalRpcTargets()
    )
    .RunConsoleAsync();