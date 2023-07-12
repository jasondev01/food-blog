const mongoose = require("mongoose");

// schema to save documents
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1024,
    },
    favorites: {
        type: [String],
        default: [],
    }
}, {
    timestamps: true,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;