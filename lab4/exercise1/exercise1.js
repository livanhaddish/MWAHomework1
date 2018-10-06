'use strict';

{

    const url = require('url');

    const fs = require('fs');

    const http = require('http');

    const { fork } = require('child_process');

    const path = require('path');



    const server = http.createServer();

    server.on('request', (req, res) => {

        console.log(req.url);

        let urlObj = url.parse(req.url, true).query;/// should be: ?url=../../files/file3.txt

        if(urlObj.url == undefined) {

            console.log('url param empty');

            res.end();

            return;

        }

        const filePath = path.join(__dirname, 'readFile.js')

        const childProcess = fork(filePath);

        res.writeHead(200, {'Content-Type': 'text/plain'});

        childProcess.on('message', data => {

            console.log('writing data...');

            res.end(data);

            console.log('Finished writing data...');

            childProcess.kill();

        });

        childProcess.send(urlObj.url);

    });

    server.listen(4000, () => console.log('Port 4000 Running...'));

}