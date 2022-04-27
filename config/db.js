require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    //database connection
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("DataBase Connected")
    }).catch(e => {
        console.log(e);
    });


}

module.exports = connectDB