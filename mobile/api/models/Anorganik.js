const mongoose = require ("mongoose");

const AnorganikSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    type: {
        type: String,
        required: true,
        enum: ['Plastik', 'Kertas', 'Logam', 'Kaca']
    },
    mass : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
});

module.exports = mongoose.model("Anorganik", AnorganikSchema);