FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]
# docker run -d -p 3307:3306 --name my-mysql -e MYSQL_DATABSE=usersettings MYSQL_ROOT_PASSWORD=password my-mysql
