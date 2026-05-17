import { motion } from 'framer-motion';

const timeline = [
    { icon: '🎓', title: 'Réseaux & Télécommunications', desc: 'Formation technique solide en infrastructures réseau, protocoles et architectures système.', date: 'En cours' },
    { icon: '☁️', title: 'AWS Cloud Practitioner', desc: 'Apprentissage des services AWS : EC2, S3, RDS, VPC, IAM — vers une certification cloud.', date: '2024 – 2025' },
    { icon: '💻', title: 'Développement Web Full-Stack', desc: 'Maîtrise du stack React, Node.js, Express & MongoDB pour des applications modernes.', date: '2023 – 2025' },
    { icon: '🚀', title: 'Entrepreneuriat Digital', desc: 'Lancement de projets e-commerce communautaires et solutions digitales innovantes.', date: '2024 – 2025' },
];

const stats = [
    { val: '5', suf: '+', label: 'Projets' },
    { val: '15', suf: '+', label: 'Techs' },
    { val: 'AWS', suf: '', label: 'Certif. visée' },
    { val: '100', suf: '%', label: 'Déterminée' },
];

export default function About() {
    return (
        <section id="a-propos" className="py-24 px-[5%] bg-[rgba(255,255,255,.015)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left */}
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <div className="glass border-glass rounded-2xl p-8 backdrop-blur-xl">
                        <div className="flex items-center gap-3.5 mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e879a0] to-[#a855f7] flex items-center justify-center text-2xl font-bold text-white">A</div>
                            <div>
                                <div className="text-xl font-bold">Alia</div>
                                <div className="text-sm text-[#f9a8c9] font-medium mt-0.5">Développeuse & Entrepreneure Digitale</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {['Cloud Computing', 'React Dev', 'Entrepreneuriat', 'Réseaux & Télécoms', 'DevOps'].map((t) => (
                                <span key={t} className="bg-[rgba(232,121,160,.1)] border border-[rgba(232,121,160,.2)] px-3 py-1 rounded-full text-xs font-semibold text-[#f9a8c9]">{t}</span>
                            ))}
                        </div>
                        <p className="text-sm text-[#a8b8d0] leading-relaxed">
                            Passionnée par la tech et l'innovation digitale, je combine expertise cloud, développement web moderne et vision entrepreneuriale pour créer des solutions à fort impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5 mt-3.5">
                        {stats.map(({ val, suf, label }) => (
                            <div key={label} className="glass border-glass rounded-2xl p-5 text-center">
                                <div className="text-3xl font-extrabold tracking-tight">
                                    {isNaN(val) ? <span className="text-[#e879a0]">{val}</span> : <>{val}<span className="text-[#e879a0]">{suf}</span></>}
                                </div>
                                <div className="text-xs text-[#6b7fa0] mt-1 font-medium">{label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <span className="inline-flex items-center gap-2 bg-[rgba(232,121,160,.1)] border border-[rgba(232,121,160,.25)] px-4 py-1.5 rounded-full text-xs font-semibold text-[#f9a8c9] uppercase tracking-widest mb-5">✦ À propos</span>
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4 leading-tight">Construire le digital de demain</h2>
                    <p className="text-base text-[#a8b8d0] leading-relaxed mb-9">
                        Étudiante en réseaux et télécommunications, je m'épanouis à l'intersection du cloud, du code et de l'entrepreneuriat. Chaque projet est une opportunité d'innover.
                    </p>
                    <div className="flex flex-col gap-6">
                        {timeline.map((t, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[rgba(232,121,160,.12)] border border-[rgba(232,121,160,.2)] flex items-center justify-center text-lg flex-shrink-0 mt-1">{t.icon}</div>
                                <div>
                                    <div className="text-[15px] font-bold mb-1">{t.title}</div>
                                    <div className="text-sm text-[#a8b8d0] leading-relaxed">{t.desc}</div>
                                    <div className="text-[11px] text-[#f9a8c9] font-semibold mt-1.5 uppercase tracking-wider">{t.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}