const http = require('http');
querystring = require('querystring');

/*
const server = http.createServer(function(request, response) {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log('--- headers ----------------');
        console.log(headers);
        console.log('--- method ----------------');
        console.log(method);
        console.log('--- url ----------------');
        console.log(url);
        console.log('--- body ----------------');
        console.log(body);
    });

    // response.end('Holaaaa');
});

server.listen(8081);
*/

const postData = querystring.stringify({
    'msg': 'Hello World!'
});
  
const options = {
    hostname: 'localhost',
    port: 8080,
    path: '/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
  