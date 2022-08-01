const client = require('./pgConnection.js');
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

client.connect();

// get all users
app.get('/users', (req, res) => {
    client.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error');
        } else {
            res.json(result.rows);
        }
    });
});

// get user by id
app.get('/users/:id', (req, res) => {
    client.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error');
        } else {
            res.json(result.rows);
        }
    });
});

// add user
app.post('/users', (req, res) => {
    client.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [req.body.name, req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error');
        } else {
            res.json(result.rows);
        }
    });
});
