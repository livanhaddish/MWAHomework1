{

    const fs = require('fs');

    const http = require('http');

    const path = require('path');



    const server = http.createServer(function (req, res) {

        console.log('Start reading async');

        fs.createReadStream(__dirname+ '/file3.txt')

        .pipe(res)

        .on('finish', () => console.log("end---file"));

        console.log('End process');

    });

    server.listen(4000, () => console.log('Port 4000 Running...'));

}