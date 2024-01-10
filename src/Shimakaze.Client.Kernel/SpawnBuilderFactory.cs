
using Shimakaze.Client.Kernel.Model.SpawnerConfig;

namespace Shimakaze.Client.Kernel;

public interface ISpawnerFactory
{
    Spawner Create();
}

internal sealed class SpawnerFactory : ISpawnerFactory
{
    public Spawner Create() => new ();
}