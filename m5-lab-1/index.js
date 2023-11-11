const express = require('express')
const app = express();
//Exercise 1.
const app1 = express();
const app2 = express();
const port = 3000;
//Exercise 1.
const port1 = 3001;
const port2 = 3002;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

//Exercise 1.
app1.get('/', (req, res) => {
    res.send('Hello from App1!')
});

app2.get('/', (req, res) => {
    res.send('Hello from App2!')
});

// app.get('/test', (req, res) => {
//     res.send('This is a test')
// });

app.use('/', express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`)
});

//Exercise 1.
app1.listen(port1, () => {
    console.log('App1 has launched');
})

app2.listen(port2, () => {
    console.log('App2 has launched');
})