import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const links = [
    { icon: '💻', label: 'GitHub', handle: '@alia-dev', bg: 'rgba(255,255,255,.1)', href: '#' },
    { icon: '💼', label: 'LinkedIn', handle: 'Alia Développeuse', bg: 'rgba(10,102,194,.2)', href: '#' },
    { icon: '📱', label: 'WhatsApp', handle: '+221 XX XXX XXXX', bg: 'rgba(37,211,102,.2)', href: '#' },
];

export default function Contact({ showToast }) {
    const [form, setForm] = useState({ nom: '', email: '', message: '' });
    const [sending, setSending] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!form.nom || !form.email || !form.message) {
            showToast('Merci de remplir tous les champs.', false);
            return;
        }
        setSending(true);
        try {
            await axios.post('http://localhost:5001/api/contact', form);
            setForm({ nom: '', email: '', message: '' });
            showToast('✅ Message envoyé ! Je vous répondrai très bientôt.');
        } catch {
            showToast('❌ Erreur lors de l\'envoi. Réessayez.', false);
        }
        setSending(false);
    };

    return (
        <section id="contact" className="py-24 px-[5%]">
            <span className="inline-flex items-center gap-2 bg-[rgba(232,121,160,.1)] border border-[rgba(232,121,160,.25)] px-4 py-1.5 rounded-full text-xs font-semibold text-[#f9a8c9] uppercase tracking-widest mb-5">✦ Contact</span>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Travaillons ensemble</h2>
            <p className="text-base text-[#a8b8d0] max-w-xl mb-12">Un projet, une collaboration, une question ? Je suis disponible et enthousiaste.</p>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
                <div>
                    <h3 className="text-xl font-bold mb-3">Me retrouver en ligne</h3>
                    <p className="text-sm text-[#a8b8d0] leading-relaxed mb-8">N'hésitez pas à me contacter via ces plateformes ou à m'envoyer directement un message.</p>
                    <div className="flex flex-col gap-3.5">
                        {links.map((l) => (
                            <a key={l.label} href={l.href} className="flex items-center gap-3.5 px-4 py-3.5 glass border-glass rounded-[14px] hover:border-[rgba(232,121,160,.3)] hover:bg-[rgba(232,121,160,.07)] transition-all duration-300 text-white no-underline group">
                                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-xl flex-shrink-0" style={{ background: l.bg }}>{l.icon}</div>
                                <div>
                                    <div className="text-sm font-semibold">{l.label}</div>
                                    <div className="text-xs text-[#6b7fa0] mt-0.5">{l.handle}</div>
                                </div>
                                <span className="ml-auto text-[#6b7fa0] group-hover:text-[#f9a8c9] transition-colors">→</span>
                            </a>
                        ))}
                    </div>
                </div>

                <motion.div className="glass border-glass rounded-[22px] p-8 backdrop-blur-xl"
                    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <form onSubmit={handleSend} className="flex flex-col gap-5">
                        {[
                            { label: 'Votre nom', key: 'nom', type: 'text', placeholder: 'Entrez votre nom' },
                            { label: 'Adresse email', key: 'email', type: 'email', placeholder: 'votre@email.com' },
                        ].map(({ label, key, type, placeholder }) => (
                            <div key={key}>
                                <label className="block text-xs font-semibold text-[#a8b8d0] uppercase tracking-widest mb-2">{label}</label>
                                <input
                                    type={type}
                                    placeholder={placeholder}
                                    value={form[key]}
                                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                                    className="w-full bg-white/[.04] border border-white/[.08] text-white font-sans text-sm px-4 py-3 rounded-xl outline-none focus:border-[#e879a0] transition-colors placeholder:text-[#6b7fa0]"
                                />
                            </div>
                        ))}
                        <div>
                            <label className="block text-xs font-semibold text-[#a8b8d0] uppercase tracking-widest mb-2">Message</label>
                            <textarea
                                placeholder="Votre message..."
                                rows={5}
                                value={form.message}
                                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                                className="w-full bg-white/[.04] border border-white/[.08] text-white font-sans text-sm px-4 py-3 rounded-xl outline-none focus:border-[#e879a0] transition-colors placeholder:text-[#6b7fa0] resize-y"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={sending}
                            className="w-full btn-rose text-white text-[15px] font-bold py-4 rounded-[14px] hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(232,121,160,.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                        >
                            {sending ? '⏳ Envoi en cours...' : '✦ Envoyer le message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}