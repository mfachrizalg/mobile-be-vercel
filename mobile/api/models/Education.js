const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content : {
        type: String
    },
    synopsis: {
        type: String
    },
    date : {
        type : Date,
        default : Date.now,
    },
    image : {
        type: String
    }
});

module.exports = mongoose.model("Education", EducationSchema);