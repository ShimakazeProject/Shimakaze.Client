using System.Diagnostics;

namespace Shimakaze.Client.Kernel;

internal sealed record class GameManagerOptions(
    string Process,
    string Arguments
);

public interface IGameManager
{
    event Action<IGameManager, EventArgs>? GameStart;
    event Action<IGameManager, EventArgs>? GameExited;

    void StartGame();
}

internal sealed class GameManager(GameManagerOptions options) : IGameManager
{
    public event Action<IGameManager, EventArgs>? GameStart;
    public event Action<IGameManager, EventArgs>? GameExited;

    public void StartGame()
    {
        ProcessStartInfo startInfo = new()
        {
            FileName = options.Process,
            Arguments = options.Arguments,
            RedirectStandardInput = true,
            RedirectStandardError = true,
            RedirectStandardOutput = true,

        };
        Process? process = Process.Start(options.Process);
        if (process is null)
            return;

        GameStart?.Invoke(this, EventArgs.Empty);

        process.Exited += OnGameExited;
    }

    private void OnGameExited(object? sender, EventArgs e)
    {
        if (sender is Process process)
        {
            process.Exited -= OnGameExited;
        }

        GameExited?.Invoke(this, e);
    }
}