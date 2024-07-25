const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

exports.protectAdmin = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.status(401).json({ message: "Access Denied" });
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
            if (err) return res.status(401).json({ message: "Invalid Token" });
            const foundUser = await User.findById(user._id);
            if (foundUser.role !== "Admin") return res.status(401).json({ message: "Access Denied" });
            next();
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.protectClient = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.status(401).json({ message: "Access Denied" });
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
            if (err) return res.status(401).json({ message: "Invalid Token" });
            const foundUser = await User.findById(user._id);
            if (foundUser.role !== "Client") return res.status(401).json({ message: "Access Denied" });
            next();
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}