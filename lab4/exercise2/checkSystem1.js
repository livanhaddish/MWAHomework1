{

    const os = require('os');



    function checkSystem() {

        console.log('Checking your system…');

        let fullSpecs = true;

        const memory = os.totalmem();

        if(memory < 4000000000){

            console.log('This app needs at least 4 GB of RAM');

            fullSpecs = false;

        }



        const cpus = os.cpus();

        if(cpus.length < 2) {

            console.log('Processor is not supported');

            fullSpecs = false;

        }



        if(fullSpecs) {

            console.log('System ischecked successfully.');

        }

    }



    checkSystem();

}