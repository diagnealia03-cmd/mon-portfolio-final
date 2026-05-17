import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({ toast }) {
    return (
        <AnimatePresence>
            {toast && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-8 right-8 bg-[#1e2a3a] border border-[rgba(232,121,160,.3)] px-6 py-3.5 rounded-[14px] text-sm font-semibold flex items-center gap-2.5 z-[9999] shadow-[0_20px_60px_rgba(0,0,0,.5)]"
                    style={{ borderColor: toast.ok ? 'rgba(232,121,160,.3)' : 'rgba(239,68,68,.4)' }}
                >
                    <span>{toast.ok ? '💌' : '⚠️'}</span>
                    <span>{toast.msg}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}