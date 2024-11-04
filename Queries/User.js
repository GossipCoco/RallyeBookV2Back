const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GellAllUsers = (nav) => {
    return model.User.findAll({})
}
module.exports = {
    GellAllUsers
}
