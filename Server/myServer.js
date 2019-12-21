const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// Tell the app to parge HTTP body message
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// auth Routes
const authRoutes = require('./Routes/auth');
app.use('/auth', authRoutes);

// token Routes
const tokenRoutes = require('./Routes/authToken');
app.use('/token', tokenRoutes);

// register Routes
const regRoutes = require('./Routes/register');
app.use('/register', regRoutes);

// regInventory Routes

const regInvRoutes = require('./Routes/regInventory');
app.use('/regInventory', regInvRoutes);

// inventory Routes
const inventoryRoutes = require('./Routes/inventory');
app.use('/inventory', inventoryRoutes);

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});