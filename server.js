const express = require("express")
const notFoundMiddleware = require("./middleware/notFound")
const errorhandlerMiddleware = require("./middleware/errorHandler")
const connectWithDb = require("./db/db")

// Router
const authRouter = require("./routes/authRoutes")
const jobRouter = require("./routes/jobRoutes")

require("dotenv").config()

const app = express()

// connect to database
connectWithDb()


// builtin middleware
app.use(express.json())





// routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", jobRouter)

// middleware


app.get("/", (req, res) => {

    res.send("hello")
})


// middleware
app.use(notFoundMiddleware)
app.use(errorhandlerMiddleware)



const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
