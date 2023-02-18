using StreamJsonRpc;

using Tomlyn;
using Tomlyn.Model;

namespace Shimakaze.Client.Kernel.Handlers;

public class I18n : IJsonRpcHandler
{
    [JsonRpcMethod("i18n/init")]
    public async Task<TomlTable> SetLanguageAsync(string lang)
    {
        var filePath = Path.GetFullPath(
            Path.Combine("Assets", "i18n", $"{lang}.toml")
        );
        if (!File.Exists(filePath))
            throw new FileNotFoundException(filePath);

        return Toml.ToModel(await File.ReadAllTextAsync(filePath));
    }
}