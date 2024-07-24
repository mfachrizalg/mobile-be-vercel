const User = require('../models/User');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: "Please fill all fields" });
        
        
        
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}