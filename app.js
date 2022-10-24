require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const tasks = require('./routes/tasks');

// middleware
app.use(express.static('public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.get('*', (req, res) => {
    res.status(404).send('Page is not found')
});

// starting server if we successfully connect to the DB
const startServer = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.SERVER_PORT}`)
        });
    } catch (err) {
        console.log(err)
    }
}

startServer();