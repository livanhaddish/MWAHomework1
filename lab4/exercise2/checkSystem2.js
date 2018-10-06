{

    const { Observable } = require('rxjs');

    const os = require('os');



    let checkSystem = Observable.create(function (observer) {

        observer.next('Checking your system…');

        let fullSpecs = true;

        const memory = os.totalmem();

        if(memory < 4000000000){

            observer.error('This app needs at least 4 GB of RAM');

            fullSpecs = false;

        }



        const cpus = os.cpus();

        if(cpus.length < 22) {

            observer.error('Processor is not supported');

            fullSpecs = false;

        }



        if(fullSpecs) {

            observer.next('System ischecked successfully.');

        }

    });



    let subscription = checkSystem.subscribe(

        x => console.log(x),

        err => console.error(err),

        () => console.log('Check System Done!!!!')

    );

}