//Lab 6.
const Calculator = require('../library/calculator');

const addNumbers = (req, res) => {
    let calc = new Calculator();
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calc.add(number1, number2);
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}

const subtractNumbers = (req, res) => {
    let calc = new Calculator();
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calc.subtract(number1, number2);
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}

const multiplyNumbers = (req, res) => {
    let calc = new Calculator();
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calc.multiply(number1, number2);
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}

const divideNumbers = (req, res) => {
    let calc = new Calculator();
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calc.divide(number1, number2);
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}

module.exports = { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers };