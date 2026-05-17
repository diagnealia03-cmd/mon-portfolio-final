import { motion } from 'framer-motion';

const badges = [
    { cls: 'top-4 -left-8 animate-float', icon: '☁️', label: 'AWS', color: '#3b82f6' },
    { cls: 'top-2 -right-6 animate-[floatR_4s_ease-in-out_infinite]', icon: '⚛️', label: 'React', color: '#61dafb' },
    { cls: 'bottom-20 -left-14 animate-[float_3s_.5s_ease-in-out_infinite] hidden md:flex', icon: '🐳', label: 'Docker', color: '#0ea5e9' },
    { cls: 'bottom-16 -right-8 animate-[floatR_4.5s_.3s_ease-in-out_infinite]', icon: '🔧', label: 'Git', color: '#f97316' },
    { cls: 'top-1/2 -left-20 -translate-y-1/2 animate-[float_3.8s_.2s_ease-in-out_infinite] hidden md:flex', icon: '💅', label: 'Tailwind', color: '#06b6d4' },
    { cls: 'top-1/2 -right-16 -translate-y-1/2 animate-[floatR_3.2s_.4s_ease-in-out_infinite]', icon: '🖥️', label: 'EC2', color: '#f59e0b' },
    { cls: 'top-[120px] -right-12 animate-[float_4.2s_.1s_ease-in-out_infinite]', icon: '🗄️', label: 'RDS', color: '#a855f7' },
    { cls: 'bottom-[140px] -left-12 animate-[floatR_3.6s_.6s_ease-in-out_infinite] hidden md:flex', icon: '🍃', label: 'MongoDB', color: '#4ade80' },
];

export default function Hero() {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section
            id="accueil"
            className="min-h-screen flex items-center px-[5%] pt-24 pb-16 relative overflow-hidden"
        >
            {/* Orbs */}
            <div className="absolute w-[500px] h-[500px] rounded-full -top-24 -right-24 blur-[80px] bg-[radial-gradient(circle,rgba(232,121,160,.25)_0%,transparent_70%)] animate-[orb1_15s_infinite_ease-in-out] pointer-events-none" />
            <div className="absolute w-[400px] h-[400px] rounded-full -bottom-12 left-0 blur-[80px] bg-[radial-gradient(circle,rgba(59,130,246,.2)_0%,transparent_70%)] animate-[orb2_12s_infinite_ease-in-out] pointer-events-none" />

            {/* Content */}
            <motion.div
                className="flex-1 max-w-[600px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#e879a0] animate-pulse2" />
                    <span className="text-xs font-semibold text-[#f9a8c9] tracking-widest uppercase">
                        Portfolio • 2025
                    </span>
                </div>

                <h1 className="text-[clamp(42px,8vw,80px)] font-black leading-[1.05] tracking-[-3px] mb-4">
                    Je suis <span className="text-gradient">Alia</span>
                </h1>

                <p className="text-xl font-semibold text-[#f9a8c9] mb-5 tracking-wide">
                    Cloud • Dev • Business Digital
                </p>

                <p className="text-base text-[#a8b8d0] leading-relaxed mb-10 max-w-[520px]">
                    Étudiante en réseaux et télécommunications, passionnée par le cloud computing,
                    le développement moderne et l'entrepreneuriat digital.
                </p>

                <div className="flex flex-wrap gap-3.5 mb-12">
                    <button
                        onClick={() => scrollTo('projets')}
                        className="btn-rose text-white text-sm font-bold px-7 py-3.5 rounded-[14px] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(232,121,160,.45)] transition-all duration-300 flex items-center gap-2"
                    >
                        🚀 Voir mes projets
                    </button>
                    <button className="glass2 border-glass text-white text-sm font-semibold px-7 py-3.5 rounded-[14px] border hover:border-[rgba(232,121,160,.3)] hover:bg-[rgba(232,121,160,.1)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                        📄 Télécharger CV
                    </button>
                    <button
                        onClick={() => scrollTo('contact')}
                        className="glass2 border-glass text-white text-sm font-semibold px-7 py-3.5 rounded-[14px] border hover:border-[rgba(232,121,160,.3)] hover:bg-[rgba(232,121,160,.1)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
                    >
                        💌 Me contacter
                    </button>
                </div>

                <div className="flex gap-8">
                    {[
                        { num: '5+', label: 'Projets réalisés' },
                        { num: '15+', label: 'Technologies' },
                        { num: '2 ans', label: "D'expérience" },
                    ].map(({ num, label }) => (
                        <div key={label}>
                            <div className="text-[28px] font-extrabold tracking-tight text-white">
                                {num.replace('+', '').replace(' ans', '')}
                                <span className="text-[#e879a0]">{num.includes('+') ? '+' : num.includes('ans') ? ' ans' : ''}</span>
                            </div>
                            <div className="text-xs text-[#6b7fa0] mt-0.5 font-medium">{label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Photo */}
            <motion.div
                className="flex-none w-[420px] relative flex items-center justify-center ml-16 hidden lg:flex"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="w-[340px] h-[340px] rounded-full grad-ring p-[3px] animate-grad-rotate">
                    <div className="w-full h-full rounded-full bg-[#1e2a3a] flex items-center justify-center overflow-hidden">
                        {/* Remplace ce span par <img src="./ta-photo.jpg" className="w-full h-full object-cover" /> */}
                        <span className="text-[100px] font-black logo-gradient tracking-[-4px]">A</span>
                    </div>
                </div>

                {badges.map(({ cls, icon, label, color }) => (
                    <div
                        key={label}
                        className={`absolute flex items-center gap-1.5 bg-[rgba(11,17,32,.9)] border border-[rgba(232,121,160,.3)] backdrop-blur-xl px-3.5 py-2 rounded-xl text-xs font-bold text-white whitespace-nowrap ${cls}`}
                    >
                        <div className="w-[7px] h-[7px] rounded-full" style={{ background: color }} />
                        {icon} {label}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}