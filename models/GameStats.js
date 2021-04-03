export default (sequelize, DataTypes) => {
  const GameStats = sequelize.define(
    "game_stats",
    {
      game_stats_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    },
    { freezeTableName: true, timestamps: false }
  );
  return GameStats;
};