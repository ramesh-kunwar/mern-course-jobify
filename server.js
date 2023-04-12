const express = require("express")
const notFoundMiddleware = require("./middleware/notFound")
const errorhandlerMiddleware = require("./middleware/errorHandler")
const connectWithDb = require("./middleware/db/db")

require("dotenv").config()

const app = express()

connectWithDb()

// middleware


app.get("/",(req, res)=>{

    res.send("hello")
})


// not found middleware
app.use(notFoundMiddleware)
app.use(errorhandlerMiddleware)

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})
