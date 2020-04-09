const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { Sequelize } = require('sequelize');
const instance = express();
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(cors());
///                         "DatabaseName", "Username" , "Password"
const sequelize = new Sequelize("company", "root", "root", {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 10,
        idle: 10000
    },
    define: {
        timestamps: false  

    }
});

const aman = sequelize.import('./../models/test.js');

// const engineer = sequelize.import ('./../models/engineer.js');
 
     
//Authentication for registration of username
console.log("enter in backend");
//console.log(engineer);
instance.post('/api/obj', (request, response) => {
    var json = {
     
      //  'id' : request.body.id,
        'username' : request.body.username,
        'item': request.body.item
      
 }
 
    sequelize.sync({ force: false })
        .then(() => aman.create(json)) 
        .then((result) => {
            response.json({ statusCode: 200, rowCount: result.length, data: "Success" });
            response.end();
        }).catch((error) => {
            response.send({ statusCode: 500, data: error });
        })
});

// instance.get('/api/engineer', (request,response) => {
//     // let cd  =  
//     console.log(engineer.findAll().then(engineer => response.json(engineer)))
//     //  console.log(cd);
// });

// instance.get('/api/username/:username' , (request,response) => {
        
// })



// listenting on the port
instance.listen(6070, () => {
    console.log('Server is listening on port 6070');
})
