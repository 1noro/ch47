var http = require('http');

/*
var options = {
    host: 'localhost',
    path: '/index.html',
    port: 8080
};

http.request(options, 'Hole maje').end();
*/

var client = http.createClient(8080, "localhost")
var request = client.request("POST", "/", {"host":"localhost"})

// send body chunks
request.write("hello, wardo")