const connectionPool = require("../../config/database");

const settingsObject = {
   app_color: null,
   vibration_type: null,
   default_categories: null,
   alert_type: null
}

module.exports = {
   createSettingsRow: function (data, callback) {
      connectionPool.query(
         `insert into settings(user_email, app_color, vibration_type, default_categories, alert_type) values(?,?,?,?,?)`,
         [
            data.user_email,
            data.app_color,
            data.vibration_type,
            data.default_categories,
            data.alert_type,
         ],
         function (error, results, fields) {
            if (error) {
               return callback(error);
            } else {
               return callback(null, results);
            }
         }
      );
   },

   updateSettingsRow: function(data, callback){
      settingsObject.app_color = data.app_color;
      settingsObject.vibration_type = data.vibration_type;
      settingsObject.default_categories = data.default_categories;
      settingsObject.alert_type = data.alert_type;
      connectionPool.query(`update settings set ? where user_email=?`,
         [settingsObject,data.user_email],
         function(error, results, fields){
            if(error){
               return callback(error);
            }
            else{
               return callback(null, results[0]);
            }
         }
      )
   }
};
