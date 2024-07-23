const mongoose = require ("mongoose");

const AdminSchema = new mongoose.Schema({
    username: {
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
        enum : ['anorganik', 'organik']
    },
    phoneNumber : {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("Admin", AdminSchema);