const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4049;
const http = require("http");
const app = express();

const Home = require("./Routes/Home");

const corsOptions = {
    cors: {
      origin: [
        "http://localhost:8085",
        "http://192.168.1.10:8085",
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
  };
  
app
.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
.use(bodyParser.json({ limit: "50mb", extended: true }))
.use(cors())
.use("/", Home)

const serv = http.createServer(app);
serv.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
