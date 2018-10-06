{

    const { Observable, of } = require('rxjs');

    const os = require('os');





    let checkSystem = () => {

        console.log('Checking your system… ');



        const obs = Observable.create((observer) => {

            observer.next(obs.specsFull);

        });



        obs.pipe((a) => {

            const memory = os.totalmem();

            if (memory < 4000000000) {

                console.log('This app needs at least 4 GB of RAM');

                a.specsFull = false;

            }

        });



        obs.pipe((a) => {

            const cpus = os.cpus();

            if (cpus.length < 2) {

                console.log('Processor is not supported');

                a.specsFull = false;

            }

        });



        obs.subscribe(

            specsFull => {

                if (specsFull == undefined || specsFull) {

                    console.log('System ischecked successfully.');

                }

            },

            err => console.error(x),

            () => console.log('Check System Done!!!!')

        );

        setTimeout(()=>{

            obs.subscribe(

                specsFull => {

                    if (specsFull == undefined || specsFull) {

                        console.log('System ischecked successfully.');

                    }

                },

                err => console.error(x),

                () => console.log('Check System Done!!!!')

            );

        }, 3000)

    }



    checkSystem();

}