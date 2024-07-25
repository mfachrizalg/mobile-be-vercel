const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    date : {
        type : String,
        required : true
    },
    image : {
        type: String
    }
});

module.exports = mongoose.model("Education", EducationSchema);