const { createUserSetting, updateUserSetting } = require("./userSetting.controller");
const router = require("express").Router();

//creating of account settings
router.post("/", createUserSetting);

//updating user settings
router.patch("/", updateUserSetting);

module.exports = router;
