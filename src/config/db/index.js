const mongoose = require("mongoose");

async function connect() {
    try {
        mongoose.connect('mongodb://localhost:27017/quan_ly_ban_hang_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connect DB Successfully!!!!");
    } catch (error) {
        console.log("Connect DB failed lắm rồi");
    }

}


module.exports = { connect };