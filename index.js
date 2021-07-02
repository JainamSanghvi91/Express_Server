const express = require('express')
const http = require('http');
const morgan = require('morgan'); //morgan is used to log informations in our screen, it will log information about incoming requests


const hostname = 'localhost';
const port = 3000;

const app = express(); //This tells that our application is going to use express
app.use(morgan('dev'));

//Here we can see we have done 2 setups for app.use() and it will work in order top to bottom like if we found the URL that satisfies
//in 1st setup then the result will be given by that otherwise it will go in 2nd setup and so on .. because we have not handled the case
//for incorrect url .. etc issues (errors)

app.use(express.static(__dirname + '/public')); // __dirname + '/public' this will the path of folder from which static HTML files will be served up by express server

//next is used to take care of middleware work
app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});