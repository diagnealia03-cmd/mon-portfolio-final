const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
    {
        categorie: { type: String, required: true },
        nom: { type: String, required: true },
        pourcentage: { type: Number, min: 0, max: 100, required: true },
        icone: { type: String, default: '⚡' },
        couleur: { type: String, default: '#e879a0' },
        ordre: { type: Number, default: 0 },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Skill', skillSchema);