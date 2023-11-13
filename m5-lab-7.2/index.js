// Dependencies
const express = require('express');
const axios = require('axios');

// Swagger Dependency
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

// Initialize Express App
const app = express();

// Set up a static server to serve files from the 'public' directory
app.use(express.static('public'));

// Allow requests from any origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Route to handle GET requests to '/products'
app.get('/products', async (req, res) => {
    try {
        // Fetch product data from the fake store API using axios
        const response = await axios.get('https://fakestoreapi.com/products');

        // Return the fetched product data as the response
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong while fetching product data.');
    }
});

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});