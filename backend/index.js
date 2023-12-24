const express = require("express");
const connectDB = require("./models/connect");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const notesRouter = require("./routes/noteRoutes");
const defaultRouter = require("./routes/defaultRoute")


//initialize express
const app = express();

//create db connection
connectDB();

app.use(cors());
app.use(express.json());


// //
app.use("/user", userRouter);
app.use("/note-api", notesRouter);
app.use("", defaultRouter);


io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Handle text updates from clients
    socket.on('text-update', (data) => {
        // Broadcast the text update to all connected clients
        io.emit('text-update', data);
    });

    // Handle disconnects
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
{
    console.log(`⚡Server is running on port ${PORT}`);
});
