const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        const { username, phoneNumber, password } = req.body;
        // kalo ada field yang kosong
        if (!username || !phoneNumber || !password) return res.status(400).json({ message: "Please fill all fields" });
        const user = await User.findOne({ phoneNumber });
        // kalo user sudah ada
        if (user) return res.status(400).json({ message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, phoneNumber, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        res.status(500).json({ message: `${error}` });
    }
}

exports.getData = async (req, res) => {
    try {
        res.status(200).json({msg: "hallo world"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}