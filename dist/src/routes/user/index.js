"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var user_1 = __importDefault(require("../../controller/user"));
var express = require("express");
var router = express.Router();
var user = new user_1.default();
router.post("/register", user.register);
router.post("/login", user.login);
router.get("/", user.getAllUser);
router.post("/query", user.updateUser);
module.exports = router;
