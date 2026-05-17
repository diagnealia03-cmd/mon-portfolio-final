const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
            required: [true, 'Le nom est requis'],
            trim: true,
            maxlength: [100, 'Nom trop long'],
        },
        email: {
            type: String,
            required: [true, "L'email est requis"],
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Email invalide'],
        },
        message: {
            type: String,
            required: [true, 'Le message est requis'],
            minlength: [10, 'Message trop court'],
            maxlength: [1000, 'Message trop long'],
        },
        lu: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);