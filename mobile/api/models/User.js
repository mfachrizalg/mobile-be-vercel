const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phoneNumber : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim:true
    },
    role : {
        type: String,
        required: true,
        enum : ['Client', 'Admin']
    },
    location : {
        type : String
    },
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