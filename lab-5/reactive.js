{
    const axios = require('axios')
    const { from } = require('rxjs');
    const express = require('express');
    const app = express();

    app.set('x-powered-by', false)
    
    app.get('/users', (request, response) => {
        response.status(200);
        response.set('Content-Type', 'text/html');
        
        const promise = axios.get('http://jsonplaceholder.typicode.com/users/')
        .then(obj => obj.data);

        from(promise).subscribe(
            data => {
                data.forEach(element => {
                    response.write(element.name)
                    response.write('<br>')
                    response.write(element.username)
                    response.write('<br>')
                    response.write(element.email)
                    response.write('<hr>')
                });
                response.end();
            }, 
            err => console.error(err),
            () => console.log('Finish')
        )
    })
    app.listen(3000, () => console.log('Running on... 3000'));
}
