const { createUserSetting, updateUserSetting } = require("./userSetting.controller");
const router = require("express").Router();

router.post("/", createUserSetting);

router.patch("/", updateUserSetting);

module.exports = router;
