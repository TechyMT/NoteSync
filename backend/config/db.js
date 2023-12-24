const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'habithive'
        })
        console.log('MongoDB connected')
    } catch (error) {
        console.log(`MongoDB connection error: ${error.message}`)
    }
}


module.exports = connectDB;