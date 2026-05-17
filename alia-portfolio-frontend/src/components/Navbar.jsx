import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'a-propos', label: 'À propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'projets', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[999] px-[5%] py-[18px] flex items-center justify-between transition-all duration-300 border-b border-glass ${scrolled ? 'bg-[#0b1120]/90 backdrop-blur-xl' : 'bg-transparent'
                    }`}
            >
                <button
                    className="text-2xl font-black logo-gradient tracking-tight"
                    onClick={() => scrollTo('accueil')}
                >
                    Alia
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className="text-[#a8b8d0] text-sm font-medium hover:text-[#f9a8c9] transition-colors duration-300 relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#e879a0] transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => scrollTo('contact')}
                    className="hidden md:block btn-rose text-white text-sm font-bold px-5 py-2 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,121,160,.4)] transition-all duration-300"
                >
                    Me contacter
                </button>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen((o) => !o)}
                    className="md:hidden text-[#f9a8c9] border border-[rgba(232,121,160,.3)] p-2 rounded-lg"
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed top-[65px] left-0 right-0 z-[998] bg-[#0b1120]/98 backdrop-blur-xl border-b border-glass px-[5%] py-4"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="block w-full text-left py-4 border-b border-glass text-base font-semibold text-[#a8b8d0] hover:text-[#f9a8c9] transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}