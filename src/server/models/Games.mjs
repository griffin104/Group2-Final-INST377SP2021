export default (sequelize, DataTypes) => {
  const Games = sequelize.define(
    "games",
    {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      season: {
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
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Games;
};