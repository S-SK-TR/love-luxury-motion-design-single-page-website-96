import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// PREMIUM UI: Sayfa geçiş animasyonları
const variants = {
  initial:  { opacity: 0, x: 10 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit:     { opacity: 0, x: -10, transition: { duration: 0.15 } }
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait"> {/* mode="wait" bir animasyon bitmeden diğerinin başlamasını engeller */}
      <motion.div key={pathname} {...variants} className="h-full w-full"> {/* className'e w-full eklendi */}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
