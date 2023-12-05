const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4049;
const http = require("http");
const app = express();