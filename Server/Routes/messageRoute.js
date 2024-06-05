const express = require("express");
const newRoute = express.Router();
const messageController = require("../Controllers/messageController");

newRoute.route("/").post(messageController.sendMessage);

module.exports = newRoute;
