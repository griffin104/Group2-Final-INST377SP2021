export default (sequelize, DataTypes) => {
    const GameStats = sequelize.define(
        "game_stats",
        {
            

        },
        { freezeTableName: true, timestamps: false }
    )
    return GameStats
}