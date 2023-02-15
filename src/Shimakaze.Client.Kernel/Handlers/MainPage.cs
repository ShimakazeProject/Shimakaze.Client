using StreamJsonRpc;

namespace Shimakaze.Client.Kernel.Handlers;

// {"jsonrpc":"2.0","method":"ui/main/buttons","id":"b0f8c8c7-9f0a-4a0c-9a9c-9c1a0a1c0a9c"}
public class MainPages : IJsonRpcHandler
{
    private readonly ShimakazeConfiguration _configuration;

    public MainPages(ShimakazeConfiguration configuration)
    {
        _configuration = configuration;
    }

    [JsonRpcMethod("ui/main/buttons")]
    public object? GetButtons()
    {
        dynamic main = _configuration["Main"];
        return main["Buttons"];
    }
}