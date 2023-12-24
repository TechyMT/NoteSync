const express = require("express");
const connectDB = require("./config/db");
// const routes = require("./routes/index");
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');

//initialize express
const app = express()

//create db connection
connectDB();

app.use(cors());
app.use(express.json());


// Use user routes
app.use('/api/v1', userRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`⚡Server is running on port ${PORT}`);
})