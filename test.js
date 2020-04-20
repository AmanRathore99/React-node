module.exports = function(sequelize, DataTypes) {
    return sequelize.define('aman', {

      id: {
        type : DataTypes.INTEGER(100),
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
        

      },

      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },

      mail: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      contact: {
        type: DataTypes.INTEGER(50),
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },

     item : {
    type: DataTypes.STRING(50),
    allowNull: false
  },

    },
      
    {
      tableName: 'aman'
    });
  };
