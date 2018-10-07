{
    const axios = require('axios')
    const express = require('express');
    const app = express();

    app.set('x-powered-by', false)
    
    app.get('/users', (request, response) => {
        response.status(200);
        response.set('Content-Type', 'text/html');
        const promise = axios.get('http://jsonplaceholder.typicode.com/users/');
        
        promise.then(data => data.data)
        .then(data => {
            data.forEach(element => {
                response.write(element.name)
                response.write('<br>')
                response.write(element.username)
                response.write('<br>')
                response.write(element.email)
                response.write('<hr>')
            });
            response.end();
        })
        .catch(err => console.error(err));

        
    })
    app.listen(3000, () => console.log('Running on... 3000'));
}
