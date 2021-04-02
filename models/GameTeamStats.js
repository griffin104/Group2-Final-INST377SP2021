export default (sequelize, DataTypes) => {
  const GameTeamStats = sequelize.define(
    "Game_Team_Stats",
    {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      maryland_score: {
        type: DataTypes.INTEGER
      },
      opposing_score: {
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
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return GameTeamStats;
};