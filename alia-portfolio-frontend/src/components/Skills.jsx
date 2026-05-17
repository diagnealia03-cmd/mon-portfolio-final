import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

export default function Skills() {
    return (
        <section id="competences" className="py-24 px-[5%]">
            <div className="text-center mb-3">
                <span className="inline-flex items-center gap-2 bg-[rgba(232,121,160,.1)] border border-[rgba(232,121,160,.25)] px-4 py-1.5 rounded-full text-xs font-semibold text-[#f9a8c9] uppercase tracking-widest">✦ Compétences</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-center mb-4">Mon stack technique</h2>
            <p className="text-base text-[#a8b8d0] text-center max-w-xl mx-auto mb-12">
                Des compétences solides en cloud, frontend, backend et DevOps — toujours en apprentissage continu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {skillsData.map((s, si) => (
                    <motion.div
                        key={si}
                        className="glass border-glass rounded-[20px] p-7 hover:border-[rgba(232,121,160,.3)] hover:-translate-y-1 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-xl" style={{ background: s.color, border: `1px solid ${s.border}` }}>
                                {s.icon}
                            </div>
                            <div>
                                <div className="text-base font-bold">{s.title}</div>
                                <div className="text-xs text-[#6b7fa0] mt-0.5">{s.count}</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3.5">
                            {s.items.map((item, ii) => (
                                <div key={ii}>
                                    <div className="flex justify-between items-center mb-1.5">
                                        <span className="text-sm font-medium text-[#a8b8d0]">{item.name}</span>
                                        <span className="text-xs font-bold text-[#f9a8c9]">{item.pct}%</span>
                                    </div>
                                    <div className="h-[5px] bg-white/[.06] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full bg-gradient-to-r from-[#e879a0] to-[#f472b6]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: si * 0.1 + ii * 0.15 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}