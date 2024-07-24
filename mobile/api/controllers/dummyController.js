const Dummy = require ('../models/Dummy');

exports.getHistoryOrganik = async (req, res) => {
    try {
        const data = await Dummy.find({$or:[{'name': 'add'},{'name':'exchange'}]}).select('name date -_id');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.getHistoryAnorganik = async (req, res) => {
    try {
        const data = await Dummy.find({$nor:[{'name': 'add'},{'name':'exchange'}]}).select('name date price -_id').sort({date: -1}).limit(3);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.getEducation = async (req, res) => {
    try {
        const data = await Dummy.find().select('title synopsis content -_id').limit(10);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}

exports.getNotification = async (req, res) => {
    try {
        const data = await Dummy.find().select('time type -_id').sort({time: -1}).limit(5);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}