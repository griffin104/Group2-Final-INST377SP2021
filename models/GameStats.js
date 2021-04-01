import Players from "./Players";
import Schedule from "./Schedule";

export default (sequelize, DataTypes) => {
  const GameStats = sequelize.define(
    "Game_Stats",
    {
      game_stats_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Players,
          key: 'player_id'
        }
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Schedule,
          key: 'game_id'
        }
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
    }
  );
  return GameStats;
};