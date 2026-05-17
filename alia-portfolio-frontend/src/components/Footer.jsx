export default function Footer() {
    return (
        <footer className="px-[5%] py-10 border-t border-white/[.08] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xl font-black logo-gradient">Alia</span>
            <span className="text-sm text-[#6b7fa0]">© 2025 Alia — Portfolio SaaS Premium</span>
            <div className="flex gap-5">
                {['GitHub', 'LinkedIn', 'WhatsApp'].map((l) => (
                    <span key={l} className="text-sm text-[#6b7fa0] cursor-pointer hover:text-[#f9a8c9] transition-colors">{l}</span>
                ))}
            </div>
        </footer>
    );
}