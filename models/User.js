const mongoose = require("mongoose")
const validator = require('validator');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: [ture, "Email must be unique"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 6,
    },
    lastname: {
        type: String,
        maxlength: 20,
        default: "lastname",
        trim: true,
    },
    location: {
        type: String,
        maxlength: 20,
        default: "my city",
        trim: true,
    },

})

module.exports = mongoose.model("User", userSchema)