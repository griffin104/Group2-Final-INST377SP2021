export default (sequelize, DataTypes) => {
  const PlayerBios = sequelize.define(
      "player_bios",
      {
          player_bios_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true
          },
          player_id: {
              type: DataTypes.INTEGER,
              allowNull: false
          },
          player_number: {
              type: DataTypes.INTEGER,
              allowNull: false
          },
          first_name: {
              type: DataTypes.VARCHAR,
              allowNull: false
          },
          last_name: {
              type: DataTypes.VARCHAR,
              allowNull: false
          },
          height_feet: {
              type: DataTypes.INTEGER,
              allowNull: false
          },
          height_inches: {
              type: DataTypes.INTEGER,
              allowNull: false
          },
          weight: {
              type: DataTypes.INTEGER,
              allowNull: false
          },
          hometown_city: {
              type: DataTypes.VARCHAR,
              allowNull: false
          },
          hometown_state: {
              type: DataTypes.VARCHAR,
              allowNull: false
          },
          major: {
              type: DataTypes.VARCHAR,
              allowNull: false
          },
          high_school: {
              type: DataTypes.VARCHAR,
              allowNull: false
          },
          season: {
              type: DataTypes.INTEGER,
              allowNull: false
          }
          

      },
      { freezeTableName: true, timestamps: false }
  )
  return PlayerBios
}