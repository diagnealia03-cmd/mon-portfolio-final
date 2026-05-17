const Contact = require('../models/Contact');

// POST /api/contact — Envoyer un message
const sendMessage = async (req, res) => {
    try {
        const { nom, email, message } = req.body;

        const contact = await Contact.create({ nom, email, message });

        res.status(201).json({
            success: true,
            message: '✅ Message envoyé avec succès !',
            data: contact,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// GET /api/contact — Lister tous les messages (admin)
const getMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json({ success: true, count: messages.length, data: messages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// PATCH /api/contact/:id/lu — Marquer comme lu
const markRead = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { lu: true },
            { new: true }
        );
        if (!contact) return res.status(404).json({ success: false, message: 'Message introuvable' });
        res.json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { sendMessage, getMessages, markRead };