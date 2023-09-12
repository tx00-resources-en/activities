const mongoose = require('mongoose')
const MONGO_URI="mongodb+srv://tx00-web:TX00%23web%2323@cluster0.1x4ks.mongodb.net/mern-app-demo?retryWrites=true&w=majority"

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URI)
    console.log(`Connected to database`)

}


module.exports = connectDB