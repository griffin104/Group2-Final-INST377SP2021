export default (sequelize, DataTypes) => {
  const GameTeamShooting = sequelize.define(
    "game_team_shooting",
    {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
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
    },
    { freezeTableName: true, timestamps: false }
  );
  return GameTeamShooting;
};