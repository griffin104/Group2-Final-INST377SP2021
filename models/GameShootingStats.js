import Players from "./Players";
import Schedule from "./Schedule";
export default (sequelize, DataTypes) => {
  const GameShootingStats = sequelize.define(
    "Game_Shooting_Stats",
    {
      shooting_stats_id: {
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
      },
    }
  );
  return GameShootingStats;
};