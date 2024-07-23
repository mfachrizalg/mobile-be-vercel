require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Express body parser
app.use(express.json());

app.get("/", (req, res) => {
    try {
        console.log("PPK Ormawa HMGP Mobile API");
        res.status(200).send("PPK Ormawa HMGP Mobile API");
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

//Routes

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).
then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error(err);
    process.exit(1);
});