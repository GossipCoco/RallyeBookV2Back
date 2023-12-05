const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4049;
const http = require("http");
const app = express();

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
  