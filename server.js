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
  // response.writeHead(200,{})
  // var headers = JSON.parse( req.headers );
  var userAgent = req.headers["user-agent"];
  var info_Obj = {
    ipaddress : req.headers["host"],
    language  : req.headers["accept-language"].split(',')[0],
    software :  userAgent.split(/\s\(|\)\s/g)[1]
  };
  
  
  console.log("software",  userAgent.split(/\s\(|\)\s/g)[1]); 
  console.log("ipaddress", req.headers["host"]);
  console.log("language", req.headers["accept-language"].split(',')[0] );
  res.end( JSON.stringify( info_Obj ));
})
// app.get("/:str", function( req, res ) {
//   var date, date_Obj ;
//   if( isNaN( req.params.str )){
//     date = new Date( req.params.str );
//     if( isNaN( date.getTime() ) ){
//       date_Obj = {
//       unix: null,
//       natural: null 
//     };  
//     }else{
//       date_Obj = {
//         unix: date.getTime(),
//         natural: date.toUTCString() 
//       };
//     }
//   }else {
//     date = new Date( parseInt( req.params.str) );
//     date_Obj = {
//       unix: date.getTime(),
//       natural: date.toUTCString() 
//     };
//   }
  
//   res.send( JSON.stringify( date_Obj ) );
  
// })


// listen for requests :)
var listener = app.listen(4000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
