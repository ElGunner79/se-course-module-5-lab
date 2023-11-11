//Lab 6.3
const Logger = require('./Logger')

//Lab 6.1.
class Calculator {
    constructor() {
        //Lab 6.1.
        //this.id = Date.now()
        //Lab 6.2
        this.id = Math.floor(Math.random() * 100000);
        //Lab 6.3
        this.logger = new Logger('Calculator', this.id);
    }
    #log = (value) => {
        console.log(`[Calculator :${this.id}]:${value}`)
    }
    add(num1, num2) {
        const value = num1 + num2
        //Lab 6.1.
        //this.#log(value)
        //Lab 6.3
        this.logger.log(value)
        return value;
    }
    subtract(num1, num2) {
        const value = num1 - num2
        //Lab 6.1.
        //this.#log(value)
        //Lab 6.3
        this.logger.log(value)
        return value;
    }
    multiply(num1, num2) {
        const value = num1 * num2
        //Lab 6.1.
        //this.#log(value)
        //Lab 6.3
        this.logger.log(value)
        return value;
    }
    divide(num1, num2) {
        const value = num1 / num2
        //Lab 6.1.
        //this.#log(value)
        //Lab 6.3
        this.logger.log(value)
        return value;
    }
}
module.exports = Calculator