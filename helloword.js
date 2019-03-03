var http = require('http');
var data = {mes:'Hello World Node+Vue.js'};

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin':'*'});
    response.end(JSON.stringify(data));
}).listen(88);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:88/');