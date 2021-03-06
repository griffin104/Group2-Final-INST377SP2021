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
              type: DataTypes.INTEGER,
              allowNull: false
          },
          position: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          first_name: {
              type: DataTypes.STRING
          },
          last_name: {
              type: DataTypes.STRING
          },
          height_feet: {
              type: DataTypes.INTEGER
          },
          height_inch: {
              type: DataTypes.INTEGER
          },
          weight: {
              type: DataTypes.INTEGER
          },
          hometown_city: {
              type: DataTypes.STRING
          },
          hometown_state: {
              type: DataTypes.STRING
          },
          major: {
              type: DataTypes.STRING
          },
          high_school: {
              type: DataTypes.STRING
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