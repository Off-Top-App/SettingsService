<h1>User Settings Microservice</h1>
<p>RESTful api service that connects to MySQL database and creates/updates user's settings information.</p>
<p>File Location: /Users/jsc31994/Documents/projects/micro-services/settings-service/SettingsService</p>
<br>
<h2>Database Setup</h2>
<ul>
  <li>Application Port = 3000</li>
  <li>Database Port = 3306(default)</li>
  <li>Host = localhost</li>
  <li>Username = root</li>
  <li>Password = password</li>
  <li>Database Name = userSettings</li>
  <li>Table Name = settings</li>
</ul>

<h2>Repo Setup</h3>
<h4>Software Requirements</h4>
<ul>
  <li>Node.js v12.10.0 (Nodemon recommended for hot reload)</li>
  <li>MySQL Server version: 8.0.20</li>
</ul>
<h3>MySQL Table Creation</h3>
<code>DROP TABLE IF EXISTS `settings`;</code><br>
<code>/*!40101 SET @saved_cs_client     = @@character_set_client */;</code><br>
<code>/*!50503 SET character_set_client = utf8mb4 */;</code><br>
<code>CREATE TABLE `settings` (</code><br>
  <code>`id` int NOT NULL AUTO_INCREMENT,</code><br>
  <code>`user_email` varchar(40) NOT NULL,</code><br>
  <code>`app_color` varchar(25) NOT NULL,</code><br>
  <code>`vibration_type` varchar(25) NOT NULL,</code><br>
  <code>`default_categories` varchar(100) NOT NULL,</code><br>
  <code>`alert_type` varchar(25) NOT NULL,</code><br>
  <code>PRIMARY KEY (`id`)</code><br>
<code>);</code>

<h2>How to Run</h3>
<ol>
  <li>Run <code>node app.js</code> within terminal/cmd (nodemon HIGHLY recommended)</li>
  <li>Open Postman and create new Request</li>
  <li>For Post Requests (creating a row)
    <ul>
      <li>Select <code>POST</code> on request type</li>
      <li>Enter <code>http://localhost:3000/api/userSettings</code> on address line</li>
      <li>Select <code>Body</code> tab under address bar</li>
      <li>Write a JSON object or use...</li>
      <ul>
        <li><pre><code>{
	"app_color": "blue",
	"vibration_type": "heavy",
	"default_categories": "[math, english, science]",
	"alert_type": "global",
	"user_email": "jack@gmail.com"
}</code></pre></li>
      <ul>
    </ul>
  </li>
  <li>Hit <code>Send</code>, if done properly, Success message will appear.</li></li></ul></ul>
  <li>
  For Patch Requests (Updating a row)
  <ul>
      <li>Select <code>PATCH</code> on request type</li>
      <li>Enter <code>http://localhost:3000/api/userSettings</code> on address line</li>
      <li>Select <code>Body</code> tab under address bar</li>
      <li>Write a JSON object or use...</li>
      <ul>
        <li><pre><code>{
	"app_color": "green",
	"vibration_type": "light",
	"default_categories": "[music, french, biology]",
	"alert_type": "in-app",
	"user_email": "jack@gmail.com"
}</code></pre></li>
      <ul>
    </ul>
  </li>
  <li>Hit <code>Send</code>, if done properly, Success message will appear.</li></li></ul></ul>
  </li>
</ol>
