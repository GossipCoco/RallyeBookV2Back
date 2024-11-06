const express = require('express');

const User = require('../Controller/User')

const router = express.Router();

router
    .get('/GetUserById/id', User.GetUserById)
    .post('/login', User.Login)    
    .post('/GellAllUsers', User.GellAllUsers)

    module.exports = router