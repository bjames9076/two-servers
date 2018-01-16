// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT_01 = 7000;

var PORT_02 = 7500;
// Create a generic function to handle requests and responses
function handleRequest_01(request, response) {


  response.end("It Works!! Path Hit: " + request.url);
}

function handleRequest_02(request, response) {
    
    
      response.end("It Works!! Path Hit: " + request.url);
    }

var server_01 = http.createServer(handleRequest_01);

var server_02 = http.createServer(handleRequest_02);

// Start our server so that it can begin listening to client requests.
server_01.listen(PORT_01, function() {

  // Log (server-side) when our server has started
  console.log("You are beautiful");
});

server_02.listen(PORT_02, function() {
    
      // Log (server-side) when our server has started
      console.log("you smell");
    });