const mongoose = require("mongoose");

const DummySchema = new mongoose.Schema({
    name: {
        type: String
    },
    date : {
        type: String
    },
    price : {
        type : String
    },
    title : {
        type : String
    },
    synopsis : {
        type : String
    },
    content : {
        type : String
    },
    time : {
        type : String
    },
    type : {
        type : String
    }
});

module.exports = mongoose.model("Dummy", DummySchema);