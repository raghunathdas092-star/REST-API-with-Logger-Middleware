const express = require('express');
const morgan = require('morgan');

const logger = require('./middleware/logger');
const userRoutes = require('./routes/users');

const app = express();


// Body Parsing Middleware

app.use(express.json());


// Morgan Logging Middleware

app.use(morgan('dev'));


// Custom Middleware

app.use(logger);

//Home Route
app.get('/', (req, res) => {
    res.json({
        message: 'Advanced Server Running'
    });
});


// Routes

app.use('/users', userRoutes);


// Error Middleware

app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({
        message: 'Something went wrong!'
    });
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});