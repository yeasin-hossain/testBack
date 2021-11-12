import UserClass from "../../controller/user";


const express = require("express");

const router = express.Router();
const user = new UserClass();
router.post("/register",  user.register);
router.post("/login",  user.login);
router.get("/", user.getAllUser);
router.post("/query", user.updateUser);

export = router;
