'use strict';

const http = require('http');

let PORT = '1337';

http.createServer((req, res) => {
    console.log(req.headers.cookie);
}).listen(PORT);