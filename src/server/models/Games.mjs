export default (sequelize, DataTypes) => {
  const Games = sequelize.define(
      "games",
      {
        game_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      season: {
          type: DataTypes.INTEGER
      },
      opposing_school: {
          type: DataTypes.STRING
      },
      home_or_away: {
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
      },
    },
      { freezeTableName: true, timestamps: false }
  )
  return Games
}