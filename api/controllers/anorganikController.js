const Anorganik = require('../models/Anorganik');
const User = require('../models/User');
const mongoose = require('mongoose');

exports.createAnorganik = async (req, res) => {
    try {
        const id = req.params;
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        const result = [];
        for (let i = 0; i < req.body.length; i++) {
            if (!req.body[i].type || !req.body[i].description) return res.status(400).json({ message: "Please fill all fields" });
            if (req.body[i].price <= 0 || req.body[i].mass <= 0) return res.status(400).json({ message: "Price or mass must be positive" });
            const anorganik = new Anorganik({
                type: req.body[i].type,
                description: req.body[i].description,
                mass: req.body[i].mass,
                price: req.body[i].price,
                user: new mongoose.Types.ObjectId(id)
            });
            result.push(anorganik)
        };
        const newAnorganik = await Anorganik.insertMany(result);
        if (!newAnorganik) return res.status(400).json({ message: "Anorganik not created" });
        for (let i = 0; i < newAnorganik.length; i++) {
            user.anorganik.push(newAnorganik[i]._id);
            await user.save();
        }
        res.status(201).json({ message: "Anorganik created successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

