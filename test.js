module.exports = function(sequelize, DataTypes) {
    return sequelize.define('aman', {

      id: {
        type : DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true

      },

      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    }, {
      tableName: 'aman'
    });
  };