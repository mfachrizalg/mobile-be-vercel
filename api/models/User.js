const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    fullname : {
        type : String,
        required : true
    },
    phoneNumber : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role : {
        type: String,
        enum : ['Client', 'Admin-Organik', 'Admin-Anorganik'],
        default : 'Client'
    },
    // Untuk bankSampah kayaknya perlu bikin 1 collection lagi
    bankSampah : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "BankSampah"
    },
    // Kayaknya perlu bikin collection untuk nampung images
    // Untuk Client
    organik : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Organik"
    }],
    anorganik : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Anorganik"
    }],
    notification : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Notification"
    }]
});

module.exports = mongoose.model("User", UserSchema);