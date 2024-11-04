const { Sequelize } = require('sequelize')
// const config = require('../../config')

// const connectionConfig = config
// console.log(connectionConfig)
const connection = new Sequelize(    {
        "username": "sa",
        "password": '23031983',
        "database": "WritingPlanner",
        "host": "localhost",
        "dialect": "mssql",
        dialectOptions: {
            options: {
                encrypt: true, // Si nécessaire pour votre configuration MSSQL
            }
        },        
        options: {
            instanceName: 'sqlexpress'
        }
    },
)
connection
    .authenticate()
    .then((err) => {
        // console.log(err)
        // connection.sync({force: true})
        // .catch(err => console.log('err connect bdd : ', err))
        console.log('Back end Connection successfull')
    })
    .catch(err => console.log('Disconnect'))

module.exports = connection


