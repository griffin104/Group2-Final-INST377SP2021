export default (sequelize, DataTypes) => {
  const PlayerBios = sequelize.define(
      "player_bios",
      {
          

      },
      { freezeTableName: true, timestamps: false }
  )
  return PlayerBios
}