const express = require("express");
const cors = require("cors");
const messageRoute = require("./Routes/messageRoute");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/message", messageRoute);

module.exports = app;
