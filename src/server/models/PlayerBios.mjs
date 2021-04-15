export default (sequelize, DataTypes) => {
  const PlayerBios = sequelize.define(
      "player_bios",
      {
          player_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true
          },
          player_number: {
              type: DataTypes.INTEGER
          },
          first_name: {
              type: DataTypes.VARCHAR
          },
          last_name: {
              type: DataTypes.VARCHAR
          },
          height_feet: {
              type: DataTypes.INTEGER
          },
          height_inches: {
              type: DataTypes.INTEGER
          },
          weight: {
              type: DataTypes.INTEGER
          },
          hometown_city: {
              type: DataTypes.VARCHAR
          },
          hometown_state: {
              type: DataTypes.VARCHAR
          },
          major: {
              type: DataTypes.VARCHAR
          },
          high_school: {
              type: DataTypes.VARCHAR
          },
          season: {
              type: DataTypes.INTEGER
          }
          ,

      },
      { freezeTableName: true, timestamps: false }
  )
  return PlayerBios
}