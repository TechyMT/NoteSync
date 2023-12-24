import { Schema } from "mongoose";

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})