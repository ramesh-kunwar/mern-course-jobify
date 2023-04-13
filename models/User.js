const mongoose = require("mongoose")
const validator = require('validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        // minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: [true, "Email must be unique"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 6,
        select: false,
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

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
})


userSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY })
}


module.exports = mongoose.model("User", userSchema)