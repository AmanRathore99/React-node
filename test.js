module.exports = function(sequelize, DataTypes) {
    return sequelize.define('aman', {

      id: {
        type : DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
        

      },

      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

  item : {
    type: DataTypes.STRING(30),
    allowNull: false
  },

    },
      
    {
      tableName: 'aman'
    });
  };
