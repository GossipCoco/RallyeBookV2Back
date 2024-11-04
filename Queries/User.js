const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const { Op } = require("sequelize");
const GetUserByUserName = (username) => {
    console.log("****GetUserByUserName User ****", username)
    return model.User.findOne({
        where: { Login : username },
        include:[
            { model: model.Role },
            { model: model.Level }
        ]
    })
}
const GellAllUsers = (nav) => {
    return model.User.findAll({})
}
const UpdateLastDateConnection = (usr) => {
    console.log("****UpdateLastDateConnection ID User ****", usr)
    const promises = []
    const date = new Date().toISOString(); // Convertir la date en chaîne
    const request = model.User.update({ LastConnexion: date }, { where: { Id: { [model.Utils.Op.like]: `%${usr}%` } } })
    promises.push(request)
    return request
        .then(w => { 
            console.log("w", w)
            return Promise.all(promises)
        })
        .catch(err => { console.log("ERROR UpdateLastDateConnection : ", err) })
}
module.exports = {
    GellAllUsers,
    GetUserByUserName,
    UpdateLastDateConnection
}
