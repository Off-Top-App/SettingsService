const { createSettingsRow, updateSettingsRow } = require("./userSetting.service");

module.exports = {
   createUserSetting: function (req, res) {
      const body = req.body;
      createSettingsRow(body, function (err, results) {
         if (err) {
            console.log(err);
            return res.status(500).json({
               success: 0,
               message: "UNABLE TO CONNECT TO DATABASE",
            });
         } else {
            return res.status(200).json({
               success: 1,
               data: body,
            });
         }
      });
   },
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
