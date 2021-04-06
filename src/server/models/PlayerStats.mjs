export default (sequelize, DataTypes) => {
    const PlayerStats = sequelize.define(
        "player_stats",
        {
            

        },
        { freezeTableName: true, timestamps: false }
    )
    return PlayerStats
}