require("dotenv").config();
const express = require("express");
const connectDB = require("./api/config/connectDB");
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
app.use("/api/berita", require("./api/routes/beritaRoute"));

//Connect to MongoDB
connectDB;
if (connectDB) 
    app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});