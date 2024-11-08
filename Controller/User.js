const jwt = require('jsonwebtoken');
const queries = require('../Queries/User.js')
const config = require("../Config/db.config");
const { handleResponse } = require('../Functions/handleResponse.js');
const User = {};

User.GellAllUsers = (req, res) => {
    handleResponse(res, queries.GellAllUsers(req.body))
}
User.GetUserById = (req, res) => {
  handleResponse(res, queries.GetUserById(req. params.id))
}
User.Login = (req, res) => {
    const Login = req.body.username
    const Pwd = req.body.Password
    queries.GetUserByUserName(Login)
    .then(user => {        
        if (!user) {
          return res.status(404).send({ message: 'User Not Found.' });
        }
        if (Pwd !== req.body.Pwd) {
          return res.status(401).send({ message: 'Invalid Password!' });
        }
    const result = {
        usrID: user.Id,
        Email: user.Email,
        isSuccess: true,
        tocken: null,
        role: user.Role.Id,
        expire: config.JWT.expire
      }
      console.log("result :", result)
      const token = jwt.sign({ id: user.Id }, config.JWT.secret, {
        expiresIn: 86400 // 24 hours
      });
      result.tocken = token
      console.log("result :", result)
      queries.UpdateLastDateConnection(user.Id, user.Email)
      .then(() => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log("Login : ", err);
        res.status(500).send(err);
      });      
    })
    .catch(err => {
      console.log("ERREUR LOGIN :", err);
      res.status(500).send(err);
    });
}
module.exports = User