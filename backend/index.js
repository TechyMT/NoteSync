const express = require("express");
const connectDB = require("./config/db");
// const routes = require("./routes/index");
const cors = require("cors");


//initialize express
const app = express()

//create db connection
connectDB();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

//allow 3000
// corsOptions = {
//     origin: "http://localhost:3000"
// }

// app.use(cors(corsOptions));


// //
// app.use(routes);
// app.get("/", (req, res) => {
//     res.send("Hello World")
// });



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`⚡Server is running on port ${PORT}`);
})