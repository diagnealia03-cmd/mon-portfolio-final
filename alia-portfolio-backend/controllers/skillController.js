const Skill = require('../models/Skill');

const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find().sort({ categorie: 1, ordre: 1 });
        res.json({ success: true, data: skills });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createSkill = async (req, res) => {
    try {
        const skill = await Skill.create(req.body);
        res.status(201).json({ success: true, data: skill });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { getSkills, createSkill };