namespace Shimakaze.Client.Kernel.Model.SpawnerConfig;

public sealed class SpawnerSettings
{
    public string? Name { get; set; }
    public string? Scenario { get; set; }
    public string? UIGameMode { get; set; }
    public string? UIMapName { get; set; }
    public string? MapID { get; set; }
    public int? PlayerCount { get; set; }
    public int? Side { get; set; }
    public bool? IsSpectator { get; set; }
    public int? Color { get; set; }
    public string? CustomLoadScreen { get; set; }
    public int? AIPlayers { get; set; }
    public int? Seed { get; set; }
    public bool? CoachMode { get; set; }
    public bool? AutoSurrender { get; set; }

    public string? CampaignID { get; set; }
    public string? GameSpeed { get; set; }
    public string? Ra2Mode { get; set; }
    public string? Firestorm { get; set; }
    public string? IsSinglePlayer { get; set; }
    public string? SidebarHack { get; set; }
    public string? BuildOffAlly { get; set; }
    public string? DifficultyModeHuman { get; set; }
    public string? DifficultyModeComputer { get; set; }
}

public static class ISpawnerSettingsExtensions
{
    public static SpawnerSettings SetName(this SpawnerSettings settings, string? value)
    {
        settings.Name = value;
        return settings;
    }
    public static SpawnerSettings SetScenario(this SpawnerSettings settings, string? value)
    {
        settings.Scenario = value;
        return settings;
    }
    public static SpawnerSettings SetUIGameMode(this SpawnerSettings settings, string? value)
    {
        settings.UIGameMode = value;
        return settings;
    }
    public static SpawnerSettings SetUIMapName(this SpawnerSettings settings, string? value)
    {
        settings.UIMapName = value;
        return settings;
    }
    public static SpawnerSettings SetMapID(this SpawnerSettings settings, string? value)
    {
        settings.MapID = value;
        return settings;
    }
    public static SpawnerSettings SetPlayerCount(this SpawnerSettings settings, int? value)
    {
        settings.PlayerCount = value;
        return settings;
    }
    public static SpawnerSettings SetSide(this SpawnerSettings settings, int? value)
    {
        settings.Side = value;
        return settings;
    }
    public static SpawnerSettings SetIsSpectator(this SpawnerSettings settings, bool? value)
    {
        settings.IsSpectator = value;
        return settings;
    }
    public static SpawnerSettings SetColor(this SpawnerSettings settings, int? value)
    {
        settings.Color = value;
        return settings;
    }
    public static SpawnerSettings SetCustomLoadScreen(this SpawnerSettings settings, string? value)
    {
        settings.CustomLoadScreen = value;
        return settings;
    }
    public static SpawnerSettings SetAIPlayers(this SpawnerSettings settings, int? value)
    {
        settings.AIPlayers = value;
        return settings;
    }
    public static SpawnerSettings SetSeed(this SpawnerSettings settings, int? value)
    {
        settings.Seed = value;
        return settings;
    }
    public static SpawnerSettings SetCoachMode(this SpawnerSettings settings, bool? value)
    {
        settings.CoachMode = value;
        return settings;
    }
    public static SpawnerSettings SetAutoSurrender(this SpawnerSettings settings, bool? value)
    {
        settings.AutoSurrender = value;
        return settings;
    }
    public static SpawnerSettings SetCampaignID(this SpawnerSettings settings, string? value)
    {
        settings.CampaignID = value;
        return settings;
    }
    public static SpawnerSettings SetGameSpeed(this SpawnerSettings settings, string? value)
    {
        settings.GameSpeed = value;
        return settings;
    }
    public static SpawnerSettings SetRa2Mode(this SpawnerSettings settings, string? value)
    {
        settings.Ra2Mode = value;
        return settings;
    }
    public static SpawnerSettings SetFirestorm(this SpawnerSettings settings, string? value)
    {
        settings.Firestorm = value;
        return settings;
    }
    public static SpawnerSettings SetIsSinglePlayer(this SpawnerSettings settings, string? value)
    {
        settings.IsSinglePlayer = value;
        return settings;
    }
    public static SpawnerSettings SetSidebarHack(this SpawnerSettings settings, string? value)
    {
        settings.SidebarHack = value;
        return settings;
    }
    public static SpawnerSettings SetBuildOffAlly(this SpawnerSettings settings, string? value)
    {
        settings.BuildOffAlly = value;
        return settings;
    }
    public static SpawnerSettings SetDifficultyModeHuman(this SpawnerSettings settings, string? value)
    {
        settings.DifficultyModeHuman = value;
        return settings;
    }
    public static SpawnerSettings SetDifficultyModeComputer(this SpawnerSettings settings, string? value)
    {
        settings.DifficultyModeComputer = value;
        return settings;
    }

    public static async Task WriteToAsync(this SpawnerSettings settings, TextWriter writer)
    {
        await writer.WriteAsync(nameof(settings.Name)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.Name).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.Scenario)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.Scenario).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.UIGameMode)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.UIGameMode).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.UIMapName)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.UIMapName).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.MapID)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.MapID).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.PlayerCount)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.PlayerCount.ToString()).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.Side)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.Side.ToString()).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.IsSpectator)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.IsSpectator.ToString()).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.Color)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.Color.ToString()).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.CustomLoadScreen)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.CustomLoadScreen).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.AIPlayers)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.AIPlayers.ToString()).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.Seed)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.Seed.ToString()).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.CoachMode)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.CoachMode.ToString()).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.AutoSurrender)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.AutoSurrender.ToString()).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.CampaignID)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.CampaignID).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.GameSpeed)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.GameSpeed).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.Ra2Mode)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.Ra2Mode).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.Firestorm)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.Firestorm).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.IsSinglePlayer)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.IsSinglePlayer).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.SidebarHack)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.SidebarHack).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.BuildOffAlly)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.BuildOffAlly).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.DifficultyModeHuman)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.DifficultyModeHuman).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

        await writer.WriteAsync(nameof(settings.DifficultyModeComputer)).ConfigureAwait(false);
        await writer.WriteAsync('=').ConfigureAwait(false);
        await writer.WriteAsync(settings.DifficultyModeComputer).ConfigureAwait(false);
        await writer.WriteAsync('\n').ConfigureAwait(false);

    }
}
