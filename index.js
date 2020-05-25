const http = require('http')
const port = 3000

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.post('/*', (request, response, next) => {
  response.set({
    'Access-Control-Allow-Origin': '*'
  });

  response.send("Hello");
  next();
})

app.options('/*', (request, response, next) => {
  console.log("options");
  response.send("success\n");
  next();
});

const server = http.createServer(app)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
