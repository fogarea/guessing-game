class GuessingGame {
    constructor() {
        this.minimum = 0;
        this.maximum = 0;
        this.middle = 0;
    }

    setRange(min, max) {
        this.minimum = min;
        this.maximum = max
        this.middle = Math.round((this.minimum + this.maximum) / 2);
    }

    guess() {
        return this.middle;
    }

    lower() {
        this.maximum = this.middle;
        this.middle = Math.round((this.minimum + this.maximum) / 2)
    }

    greater() {
        this.minimum = this.middle;
        this.middle = Math.round((this.minimum + this.maximum) / 2)
    }
}

module.exports = GuessingGame;