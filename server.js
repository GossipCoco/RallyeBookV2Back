const fs = require('fs');
const https = require('https');
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const SocketIOController = require('./Controller/socketIOController')
const PORT = process.env.PORT || 4049;
const http = require("http");
const app = express();

const Home = require("./Routes/Home");
const User = require("./Routes/User")

const corsOptions = {origin: [
        "http://localhost:8085",
        "http://192.168.1.14:8085",
      ],
      cors: {
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
      }
  };
  
app
.use('*', cors(corsOptions))
.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
.use(bodyParser.json({ limit: "50mb", extended: true }))
.use(cors())
.use("/", Home)
.use('/User', User)
.use(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(404).send({ result: 'error' });
})

const serv = http.createServer(app);
serv.listen(PORT, () => {
  SocketIOController(serv, corsOptions)
  console.log(`Server is running on port ${PORT}.`);
});
