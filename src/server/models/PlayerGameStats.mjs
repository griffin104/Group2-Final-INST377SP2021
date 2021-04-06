export default (sequelize, DataTypes) => {
    const PlayerGameStats = sequelize.define(
        "player_game_stats",
        {
            game_stats_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            player_id: {
                type: DataTypes.INTEGER
            },
            game_id: {
                type: DataTypes.INTEGER
            },
            minutes: {
                type: DataTypes.INTEGER
            },
            points: {
                type: DataTypes.INTEGER
            },
            off_reb: {
                type: DataTypes.INTEGER
            },
            def_reb: {
                type: DataTypes.INTEGER
            },
            assists: {
                type: DataTypes.INTEGER
            },
            turnovers: {
                type: DataTypes.INTEGER
            },
            blocks: {
                type: DataTypes.INTEGER
            },
            steals: {
                type: DataTypes.INTEGER
            },
            fouls: {
                type: DataTypes.INTEGER
            },
            fg_made: {
                type: DataTypes.INTEGER
            },
            fg_attempted: {
                type: DataTypes.INTEGER
            },
            three_point_made: {
                type: DataTypes.INTEGER
            },
            three_point_attempted: {
                type: DataTypes.INTEGER
            },
            ft_made: {
                type: DataTypes.INTEGER
            },
            ft_attempted: {
                type: DataTypes.INTEGER
            }

        },
        { freezeTableName: true, timestamps: false }
    )
    return PlayerGameStats
}