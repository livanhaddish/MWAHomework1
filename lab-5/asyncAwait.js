{
    const axios = require('axios')
    const { from } = require('rxjs');
    const express = require('express');
    const app = express();

    app.set('x-powered-by', false)

    app.get('/users', (request, response) => {
        response.status(200);
        response.set('Content-Type', 'text/html');
        console.log('init 0');
        (async function () {
            console.log('init 2')
            let responseObj = await axios.get('http://jsonplaceholder.typicode.com/users/');
            console.log('init 3')
            responseObj.data.forEach(element => {
                response.write(element.name)
                response.write('<br>')
                response.write(element.username)
                response.write('<br>')
                response.write(element.email)
                response.write('<hr>')
            });
            response.end();
            console.log('init 4');
        })();
        console.log('init 5');
    })
    app.listen(3000, () => console.log('Running on... 3000'));
}
