import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

export default function Projects() {
    return (
        <section id="projets" className="py-24 px-[5%] bg-[rgba(255,255,255,.015)]">
            <span className="inline-flex items-center gap-2 bg-[rgba(232,121,160,.1)] border border-[rgba(232,121,160,.25)] px-4 py-1.5 rounded-full text-xs font-semibold text-[#f9a8c9] uppercase tracking-widest mb-5">✦ Projets</span>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Mes réalisations</h2>
            <p className="text-base text-[#a8b8d0] max-w-xl mb-12">Des projets concrets qui allient innovation, technique et entrepreneuriat digital.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((p, pi) => (
                    <motion.div
                        key={pi}
                        className="glass border-glass rounded-[20px] overflow-hidden hover:border-[rgba(232,121,160,.3)] hover:-translate-y-1.5 transition-all duration-300 group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pi * 0.1 }}
                    >
                        <div className="h-[180px] flex items-center justify-center relative overflow-hidden" style={{ background: p.bg }}>
                            <span className="text-6xl">{p.emoji}</span>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-1.5 mb-3.5">
                                {p.tags.map((t) => (
                                    <span key={t} className="bg-[rgba(232,121,160,.1)] border border-[rgba(232,121,160,.15)] px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#f9a8c9]">{t}</span>
                                ))}
                            </div>
                            <h3 className="text-[17px] font-bold mb-2">{p.title}</h3>
                            <p className="text-[13px] text-[#a8b8d0] leading-relaxed">{p.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}