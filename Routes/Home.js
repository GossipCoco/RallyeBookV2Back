const express = require('express');

const Home = require('../Controller/Home');

const router = express.Router();

router
    .get('/', Home.get);

module.exports = router;