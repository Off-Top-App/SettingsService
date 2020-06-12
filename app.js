require("dotenv").config();
const express = require("express");
const app = express();
const userSettingRouter = require("./api/userSettings/userSetting.router");
const port = 3000 || process.env.APP_PORT;

// const bp = require("body-parser");
// const http = require("http");
// app.use(bp.json());

//Data returned will be in json format
app.use(express.json());

//uses router file to check different request types
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
