{

    const Gym = require('./gym');

    const gymEvent = new Gym();



    gymEvent.on('go', function(){

        console.log('Athlete is working out');

    });

}