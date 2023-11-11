const express = require('express')
const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');
//Lab 7.1
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/mytest', testRoutes);

app.use('/calculator', calculatorRoutes)

//Lab 7.1
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );

app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`)
})