'use strict';

const EventEmitter = require('events');

class Gym extends EventEmitter {

    constructor() {

        super();

        this.visit();

    }

    visit() {

        setInterval(() => this.emit('go'), 1000);

    }

}

module.exports = Gym;