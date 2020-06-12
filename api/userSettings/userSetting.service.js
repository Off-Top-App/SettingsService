const pool = require("../../config/database");

//object to be updated within our update function
const options = {
   app_color: null,
   vibration_type: null,
   default_categories: null,
   alert_type: null
}

module.exports = {
   //'create' function will insert complete row into our table
   //using our pool's specifications (database, port, etc)
   create: function (data, callback) {
      pool.query(
         //the values will be checked with the lambda function's second parameter (array)
         `insert into settings(user_email, app_color, vibration_type, default_categories, alert_type) values(?,?,?,?,?)`,
         [
            data.user_email,
            data.app_color,
            data.vibration_type,
            data.default_categories,
            data.alert_type,
         ],
         //success or failure messages
         function (error, results, fields) {
            if (error) {
               return callback(error);
            } else {
               return callback(null, results);
            }
         }
      );
   },

   //function allows table row to be updated by
   //data thats being passed around by front end
   update: function(data, callback){
      //settings our options data the data being passed in
      options.app_color = data.app_color;
      options.vibration_type = data.vibration_type;
      options.default_categories = data.default_categories;
      options.alert_type = data.alert_type;
      //performing the query message
      pool.query(`update settings set ? where user_email=?`,
      //passing in the options data into our database
         [options,data.user_email],
         //success or failure messages
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
