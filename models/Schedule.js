export default (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      game_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      opposing_school: {
        type: DataTypes.STRING
      },
      home_or_away: {
        type: DataTypes.STRING
      },
      outcome: {
        type: DataTypes.STRING
      },
      date_day: {
        type: DataTypes.INTEGER
      },
      date_month: {
        type: DataTypes.INTEGER
      },
      date_year: {
        type: DataTypes.INTEGER
      }
    }
  );
  return Schedule;
};