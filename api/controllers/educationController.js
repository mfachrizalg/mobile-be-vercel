const Education = require("../models/Education");

exports.createEducatio = async (req, res) => {
    try {
        const { title, content, synopsis } = req.body;
        if (!title || !content || !synopsis) return res.status(400).json({ message: "Please fill all fields" });
        const newEducation = new Education({ title, content, synopsis });
        await newEducation.save();
        res.status(201).json({ message: "Education created successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getAllEducation = async (req, res) => {
    try {
        const educations = await Education.find().sort({ date: -1 }).select("-__v -date -content");
        res.status(200).json(educations);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getEducation = async (req, res) => {
    try {
        const education = await Education.findById(req.params.id).select("-__v -date -synopsis" );
        if (!education) return res.status(404).json({ message: "Education not found" });
        res.status(200).json(education);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateEducation = async (req, res) => {
    try {
        const { title, content, synopsis } = req.body;
        if (!title || !content || !synopsis) return res.status(400).json({ message: "Please fill all fields" });
        const result = await Education.findByIdAndUpdate(req.params.id, { title, content, synopsis });
        if (!result) return res.status(404).json({ message: "Education not found" });
        res.status(200).json({ message: "Education updated successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteEducation = async (req, res) => {
    try {
        const result = await Education.findByIdAndDelete(req.params.id);
        if (!result) return res.status(400).json({ message: "Already deleted" });
        res.status(204).json({ message: "Education deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}