require("dotenv").config();
const express = require("express");
const app = express();
const userSettingRouter = require("./api/userSettings/userSetting.router");
const port = 3000 || process.env.APP_PORT;

app.use(express.json());

app.use("/api/userSettings", userSettingRouter);

app.listen(port, function () {
   console.log("Server running...");
});

/*
   If Authentication protocol not supported by Client error appears,
   type the following command into your mysql workspace
   [ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';]
   followed by [flush privileges;]
   also make sure your db configuration is identical to what's found in the environment variables
*/
