{

    const path = require('path');

    const fs = require('fs');



    const loadFile = (urlPath) => {

        const pathUrl = path.join(__dirname, urlPath);

        fs.readFile(pathUrl, (err, data) => {

            console.log('readFile message finish ')

            process.send(data.toString());

        });

    }



    process.on('message', (urlPath) => {

        console.log('readFile message ')

        loadFile(urlPath);

    });

}