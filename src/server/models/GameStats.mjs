export default (sequelize, DataTypes) => {
    const GameStats = sequelize.define(
        "game_stats",
        {
            game_stats_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            game_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            outcome: {
                type: DataTypes.VARCHAR
            },
            maryland_score: {
                type: DataTypes.INTEGER
            },
            opposing_score: {
                type: DataTypes.INTER
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
            ft_attemped: {
                type: DataTypes.INTEGER
            }

        },
        { freezeTableName: true, timestamps: false }
    )
    return GameStats
}