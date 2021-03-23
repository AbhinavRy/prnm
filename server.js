const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect Database
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Routes
app.use('/schemes', require('./schemeRoute'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
