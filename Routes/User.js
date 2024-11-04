const express = require('express');

const User = require('../Controller/User')

const router = express.Router();

router    
    .post('/GellAllUsers', User.GellAllUsers)

    module.exports = router