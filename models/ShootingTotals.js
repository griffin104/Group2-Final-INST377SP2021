export default (sequelize, DataTypes) => {
  const ShootingTotals = sequelize.define(
    "Shooting_Totals",
    {
      player_id: {
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
    }
  );
  return ShootingTotals;
};