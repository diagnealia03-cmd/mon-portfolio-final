const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Routes
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');

// Config
dotenv.config();
connectDB();

const app = express();

// Middleware
// Remplace 3000 par 5173
app.disable('x-powered-by');
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route de santé
app.get('/', (req, res) => {
    res.json({ message: '🌸 API Portfolio Alia — Online', status: 'running' });
});

// Routes API
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);

// Gestion des erreurs
app.use(errorHandler);

// 404
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route introuvable' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`
  🌸 Serveur Portfolio Alia
  📡 Port     : ${PORT}
  🌍 URL      : http://localhost:${PORT}
  📊 Mode     : ${process.env.NODE_ENV}
  `);
});