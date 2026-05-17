// node seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Project = require('./models/Project');
const Skill = require('./models/Skill');

const projects = [
    { titre: 'Infrastructure AWS', description: 'Déploiement EC2, RDS, VPC', technologies: ['EC2', 'RDS', 'VPC', 'IAM'], ordre: 1 },
    { titre: 'Dashboard React', description: 'Interface admin moderne', technologies: ['React', 'Tailwind', 'Node.js'], ordre: 2 },
    { titre: 'Groupage Miroirs', description: 'E-commerce communautaire', technologies: ['Digital', 'E-commerce'], ordre: 3 },
    { titre: 'Tontine de Sacs', description: 'Système collaboratif', technologies: ['Community', 'Web'], ordre: 4 },
    { titre: 'Boutique en Ligne', description: 'Vente digitale mode', technologies: ['E-commerce', 'Mode'], ordre: 5 },
];

const skills = [
    { categorie: 'Cloud & AWS', nom: 'EC2', pourcentage: 90, ordre: 1 },
    { categorie: 'Cloud & AWS', nom: 'S3', pourcentage: 85, ordre: 2 },
    { categorie: 'Frontend', nom: 'React', pourcentage: 88, ordre: 1 },
    { categorie: 'Frontend', nom: 'Tailwind CSS', pourcentage: 85, ordre: 2 },
    { categorie: 'Backend', nom: 'Node.js', pourcentage: 80, ordre: 1 },
    { categorie: 'Backend', nom: 'Express.js', pourcentage: 78, ordre: 2 },
    { categorie: 'DevOps', nom: 'Docker', pourcentage: 72, ordre: 1 },
    { categorie: 'DevOps', nom: 'Git / GitHub', pourcentage: 90, ordre: 2 },
    { categorie: 'Base de données', nom: 'MongoDB', pourcentage: 80, ordre: 1 },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
    await Project.deleteMany();
    await Skill.deleteMany();
    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    console.log('✅ Données insérées !');
    process.exit();
});