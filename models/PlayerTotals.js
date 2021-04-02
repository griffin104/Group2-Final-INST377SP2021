export default (sequelize, DataTypes) => {
  const PlayerTotals = sequelize.define(
    "Player_Totals",
    {
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      games: {
        type: DataTypes.INTEGER
      },
      games_started: {
        type: DataTypes.INTEGER
      },
      minutes: {
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
      steals: {
        type: DataTypes.INTEGER
      },
      blocks: {
        type: DataTypes.INTEGER
      },
      turnovers: {
        type: DataTypes.INTEGER
      },
      points: {
        type: DataTypes.INTEGER
      }
    }
  );
  return PlayerTotals;
};