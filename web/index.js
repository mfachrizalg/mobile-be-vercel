require("dotenv").config();
const express = require("express");
const connectDB = require("./api/config/connectDB");
const cors = require("cors");
const app = express();

//Prevent CORS errors
app.use(cors({ credentials: true, origin: true }));
// Express body parser
app.use(express.json());

app.get("/", (req, res) => {
    try {
        console.log("PPK Ormawa HMGP API");
        res.status(200).send("PPK Ormawa HMGP API");
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