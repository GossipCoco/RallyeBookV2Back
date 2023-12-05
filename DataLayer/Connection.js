const { Sequelize } = require('sequelize')
// const config = require('../../config')

// const connectionConfig = config
// console.log(connectionConfig)
const connection = new Sequelize(
    'WritingOrganizer',
    //'WritingOrganizer',
    'sa',
    '23031983',
    {
        host: 'localhost',
        port: 1433,
        dialect: 'mssql',
        dialectOptions: {
            options: {}
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
    },
    
    
)
connection
    .authenticate()
    .then((err) => {
        // console.log(err)
        // connection.sync({force: true})
        // .catch(err => console.log('err connect bdd : ', err))
        console.log('Connection successfull')
    })
    .catch(err => console.log('Disconnect'))

module.exports = connection