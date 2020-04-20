module.exports = function(sequelize, DATATYPES){

    return sequelize.define('engineer', {


        id : {
            type: DATATYPES.INTEGER(20),
            allowNUll : false,
            primaryKey: true
        },

        Name : {
            type: DATATYPES.STRING(20),
            allowNUll : false,

        },
        
        mail : {
            type : DATATYPES.STRING(20),
            allowNUll : false
        },

        status :{
            type : DATATYPES.STRING(20),
            allowNUll : false
        }
    },{ 
        tableName : 'engineer'
    
    });
};
