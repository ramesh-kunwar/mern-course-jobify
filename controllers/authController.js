
const User = require("../models/User")

const CustomError = require("../utils/customError")
const BigPromise = require("../utils/BigPromise")

exports.register = BigPromise(async (req, res, next) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        // throw bad request
        return next(new CustomError("Please provide all fields", 400))
    }

    // check if user exists
    const existinguser = await User.findOne({ email })

    if (existinguser) {
        return next(new CustomError("User Already Exists", 400))
    }

    // create a user
    const user = await User.create({
        name,
        email,
        password
    })
    // don't send the password
    user.password = undefined

    // create a token
    const token = user.createJWT()

    // send the response
    return res.status(200).json({
        user,
        token
    })



})

exports.login = (req, res) => {
    res.send("login User")
}
exports.updateUser = (req, res) => {
    res.send("update User")
}



