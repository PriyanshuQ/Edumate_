const express = require('express')
const app = express()
require('dotenv').config()
const connectDatabase = require("./config/database");
app.use(express.json());

// connecting to database
connectDatabase();
const port = process.env.PORT || 5000;

const Routes = require("./routes/Route")


app.use('/', Routes);
app.listen(port, () => console.log(`Node server started at port ${port}`))
