const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/authDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home', { user: req.session.user });
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
