const mongoose = require("mongoose")

const connectWithDb = () =>{
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log(`DB got connected`))
.catch(error => {
    console.log(`DB not connected`);
    console.log(error);
    process.exit(1)
})
}

module.exports = connectWithDb