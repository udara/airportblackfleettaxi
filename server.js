const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();

const PORT = 9000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));


// Connect to mongoose DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/airportfleet", {  
useNewUrlParser: true,
useFindAndModify: false 
});

let apiRoutes = require("./routes/api.js");
let htmlRoutes = require("./routes/html.js");

app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, ()=> console.log(`Listning to port ${PORT}`));