const jwt = require('jsonwebtoken');
const queries = require('../Queries/User.js')
const config = require("../Config/auth.config.js");
const models = require('../DataLayer/Models.js')
const { handleResponse } = require('../Functions/handleResponse.js');
const User = {};

User.GellAllUsers = (req, res) => {
    handleResponse(res, query.GetAllUsers(req.body))
}

User.Login = (req, res, next) => {
    console.log(req.body);
    userApi.SetJWT(req.body)
    .then(w => {
        console.log(w)
        res.send({ob: w, res: true}).status(200)
    })
    .catch(err => {
        console.log(err)
        res.send(err).status(500)
    })
    // model.User
    // .findOne({ where: { Login: req.body.Login } })
    // .then(user => {
    //     if(user === null) {
    //         res.send({ error: 'Utilisateur non trouvé', res: false }).status(401)
    //     }else{
    //         try {
    //             if(req.body.Password === user.Password){
    //                 const sendingToken = { Id: user.Id, token: jwt.sign({ Id: user.Id }, config.secret , { expiresIn: '48h' }) };
    //                 console.log(sendingToken)
    //                 res.send(sendingToken).status(200);
    //             }
    //             else
    //                 res.send({ error: 'Mot de passe incorrect', res: false }).status(401);
    //         }
    //         catch (error) {
    //             console.log(error);
    //             res.send({ error, pathTo: 'logout', res: false }).status(401);
    //         }
    //     }
    // })
    // .catch(err => res.send({ error: err, pathTo: 'logout', res: false }).status(500));
}
module.exports = User