const express = require("express");    
const path = require("path");
const logger = require("./middlewares/logger");
import mongoose from 'mongoose';

//? init de la app
const app = express();

// //? connection string

// mongoose.Promise = global.Promise;

// //? Connecting to the database
// const db = mongoose.connect('mongodb://localhost/APImembers')
// .then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });

//? init middleware
app.use(logger);

//? static folder
app.use(express.static(path.join(__dirname, 'public')));

//? Use routes on requests
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));