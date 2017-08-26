// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/api/whoami", function (req, res) {
  var userAgent = req.headers["user-agent"];
  var info_Obj = {
    ipaddress : getClientIp( req ).split(',')[0],
    language  : req.headers["accept-language"].split(',')[0],
    software :  userAgent.split(/\s\(|\)\s/g)[1]
  };
    res.end( JSON.stringify( info_Obj ));
})
function getClientIp(req) {
  return req.headers['x-forwarded-for'] ||
  req.connection.remoteAddress ||
  req.socket.remoteAddress ||
  req.connection.socket.remoteAddress;
}

// listen for requests :)
var listener = app.listen(4000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
