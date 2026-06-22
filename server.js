require('dotenv').config();

const express = require('express');
const app = express();

const userRoutes = require('./routes/routes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js Backend!');
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});