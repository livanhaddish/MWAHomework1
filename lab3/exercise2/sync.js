{

    const fs = require('fs');

    const http = require('http');

    const path = require('path');



    const server = http.createServer(function (req, res) {

        console.log('Start reading');

        var rs = fs.readFileSync(path.join(__dirname, 'file3.txt'));

        console.log('Finish reading');

        res.writeHead(200, {'Content-Type': 'text/plain'});

        res.write('Hello World!');

        res.write(rs);

        res.end('End file')

        console.log('End process');

    });

    server.listen(4000, () => console.log('Port 4000 Running...'));

}