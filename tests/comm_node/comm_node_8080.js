
const http = require('http');

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

    response.end('Holaaaa from 8080 srv');
});

server.listen(8080);