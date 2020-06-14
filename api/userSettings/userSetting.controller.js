const { createSettingsRow, updateSettingsRow } = require("./userSetting.service");

module.exports = {
   createUserSetting: function (req, res) {
      const body = req.body;
      //will print payload and status message via postman for testing
      createSettingsRow(body, function (err, results) {
         if (err) {
            console.log(err);
            return res.status(500).json({
               success: 0,
               message: "Unsuccessful Database Connection",
            });
         } else {
            return res.status(200).json({
               success: 1,
               data: body,
            });
         }
      });
   },
   //uses the update function found in service file
   updateUserSetting: function(req, res){
      const body = req.body;
      updateSettingsRow(body, function(err, results){
         if(err){
            console.log(err);
            return res.json({
               success: 0,
               message: "UNABLE TO UPDATE, CHECK CONSOLE"
            });
         }
         else{
            return res.json({
               success: 1,
               message: "Updated Succesfully",
               data: body
            })
         }
      })
   }
};
