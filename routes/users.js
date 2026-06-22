const express = require('express');
const router = express.Router();

const cache = require('../cache/cache');
const sendEmail = require('../jobs/emailJob');

let users = [];


// Add User

router.post('/', (req, res) => {

    const { name, email } = req.body;

    // Validation
    if (!name || !email) {
        return res.status(400).json({
            message: 'Name and Email are required'
        });
    }

    const user = {
        id: users.length + 1,
        name,
        email
    };

    users.push(user);

    // Update cache
    cache.set('users', users);

    sendEmail(user);

    res.status(201).json({
        message: 'User Added',
        user
    });
});

// Get Users

router.get('/', (req, res) => {

    const cachedUsers = cache.get('users');

    if (cachedUsers) {

        return res.json({
            source: 'cache',
            users: cachedUsers
        });
    }

    console.log("Fetching from database...");

    cache.set('users', users);

    res.json({
        source: 'database',
        users
    });
});

module.exports = router;