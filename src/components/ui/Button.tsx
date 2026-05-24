import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion'; // PREMIUM UI: Framer Motion entegrasyonu

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'glass'; // PREMIUM UI: Glass variant eklendi
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ElementType;
}

export function Button({ variant = 'primary', size = 'md', loading, icon: Icon, children, className, disabled, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: 'var(--tw-shadow-brand-glow)' }} // PREMIUM UI: Hover animasyonu ve glow efekti eklendi
      whileTap={{ scale: 0.98 }}   // PREMIUM UI: Click animasyonu
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          'bg-gradient-brand text-white shadow-md shadow-emerald-500/20 hover:shadow-emerald-400/30': variant === 'primary', // PREMIUM UI: Primary buton için gradient arka plan
          'bg-[var(--bg-elevated)] hover:bg-[var(--border)] text-[var(--text-primary)] border border-[var(--border)]': variant === 'secondary',
          'hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)]': variant === 'ghost',
          'bg-rose-600 hover:bg-rose-500 text-white': variant === 'destructive',
          'bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-md text-[var(--text-primary)] hover:bg-white/10': variant === 'glass', // PREMIUM UI: Glassmorphism stili
          'h-8 px-3 text-xs':  size === 'sm',
          'h-10 px-4 text-sm': size === 'md',
          'h-12 px-6 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {loading ? <Loader2 size={16} className="animate-spin" /> : Icon && <Icon size={16} />} 
      {children}
    </motion.button>
  );
}
