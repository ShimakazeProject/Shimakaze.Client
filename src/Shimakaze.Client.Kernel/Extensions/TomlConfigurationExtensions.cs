using Microsoft.Extensions.DependencyInjection;

using Tomlyn;

namespace Shimakaze.Client.Kernel.Extensions;

public static class TomlConfigurationExtensions
{
    public static IServiceCollection AddTomlFile(this IServiceCollection builder, string filePath)
    {
        if (!File.Exists(filePath))
            throw new FileNotFoundException(filePath);

        return builder.AddSingleton(
            new ShimakazeConfiguration(
                Toml.ToModel(
                    File.ReadAllText(filePath))));
    }
}
