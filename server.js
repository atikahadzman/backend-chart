require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes/routes');
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js Backend!');
});

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});