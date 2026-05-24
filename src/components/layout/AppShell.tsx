import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, BarChart2, Settings, Bell, User } from 'lucide-react'; // PREMIUM UI: User icon eklendi
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'; // PREMIUM UI: Framer Motion entegrasyonu

const navItems = [
  { to: '/',         icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/analytics', icon: BarChart2,      label: 'Analytics'  },
  { to: '/settings', icon: Settings,        label: 'Settings'   },
];

export function AppShell() {
  return (
    <div className="flex h-dvh bg-transparent text-[var(--text-primary)] font-sans overflow-hidden"> {/* PREMIUM UI: Ana arka plan gradienti body'ye uygulandığı için transparent yapıldı */}
      
      {/* ── Desktop Sidebar ── */}
      <motion.aside
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="hidden md:flex flex-col w-60 border-r border-[var(--border)] 
                        bg-[var(--bg-surface)] shrink-0 shadow-lg"
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-[var(--border)]">
          <span className="font-bold text-lg tracking-tight text-emerald-400">Premium App</span> {/* PREMIUM UI: Logo güncellendi */}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5" aria-label="Primary navigation"> {/* PREMIUM UI: Navigasyon öğesini ayırt etmek için aria-label eklendi */}
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to} end className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              isActive
                ? "bg-emerald-500/10 text-emerald-500" // PREMIUM UI: Brand rengine uygun aktif link rengi
                : "text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            )}>
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* User Footer */}
        <div className="p-3 border-t border-[var(--border)]">
          <button 
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors"
            onClick={() => alert('User settings clicked!')} // PREMIUM UI: onClick handler eklendi
          >
            <User className="w-8 h-8 rounded-full object-cover p-1 bg-zinc-700 text-zinc-300" size={24} /> {/* PREMIUM UI: Placeholder avatar yerine Lucide icon kullanıldı */}
            <div className="flex-1 text-left">
              <p className="text-xs font-semibold">John Doe</p>
              <p className="text-xs text-[var(--text-muted)]">john@example.com</p>
            </div>
            <Settings size={14} className="text-[var(--text-muted)]" />
          </button>
        </div>
      </motion.aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
          className="h-16 shrink-0 flex items-center justify-between px-4 md:px-6 
                           border-b border-[var(--border)] bg-[var(--bg-surface)]/80 
                           backdrop-blur-xl sticky top-0 z-30"
        >
          <h1 className="font-semibold text-lg text-[var(--text-primary)]">Dashboard</h1> {/* PREMIUM UI: Başlık boyutu */}
          <button 
            className="relative p-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors"
            onClick={() => alert('Notifications clicked!')} // PREMIUM UI: onClick handler eklendi
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
          </button>
        </motion.header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <Outlet />
        </main>
      </div>

      {/* ── Mobile Bottom Navigation (PWA Safe Area) ── */}
      <motion.nav
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
        className="md:hidden fixed bottom-0 inset-x-0 z-50 
                      bg-[var(--bg-surface)]/90 backdrop-blur-xl 
                      border-t border-[var(--border)]
                      pb-[env(safe-area-inset-bottom)] shadow-lg"
        aria-label="Mobile navigation" {/* PREMIUM UI: Navigasyon öğesini ayırt etmek için aria-label eklendi */}
      >
        <div className="flex h-16">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to} end className={({ isActive }) => cn(
              "flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
              isActive ? "text-emerald-500" : "text-[var(--text-muted)]" // PREMIUM UI: Brand rengine uygun aktif link rengi
            )}>
              <Icon size={22} />
              {label}
            </NavLink>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
