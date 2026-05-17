const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        titre: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        image: { type: String, default: '' },
        technologies: [{ type: String }],
        lien: { type: String, default: '' },
        github: { type: String, default: '' },
        ordre: { type: Number, default: 0 },
        visible: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);