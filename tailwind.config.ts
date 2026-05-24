import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class', // class tabanlı dark mode (sistem değil, kullanıcı tercihi)
  content: ['./index.html', './src/**/*.{ts,tsx}', './src/index.css'], // Düzeltme: src/index.css dosyasındaki @apply direktiflerinin algılanması için eklendi
  theme: {
    extend: {
      colors: {
        // Design token'ları CSS var'a bağla
        // Theme B — Pro Dashboard (Deep Dark) için varsayılanlar
        brand: {
          50: 'hsl(var(--brand-50) / <alpha-value>)',
          500: 'hsl(var(--brand-500) / <alpha-value>)',
          600: 'hsl(var(--brand-600) / <alpha-value>)',
        },
        // Yeni renkler: Obsidian Night, Velvet Crimson, Ethereal Blush
        obsidian: {
          950: '#0B080A',
        },
        velvet: {
          500: '#9E1B32',
        },
        ethereal: {
          300: '#F8A1B2',
        },
      },
      fontFamily: {
        // Mevcut font tanımı korunurken, yeni 'display' font ailesi eklendi
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'], // PREMIUM UI: Outfit for headings, Inter for body
        display: ['"Playfair Display"', 'serif'], // PREMIUM UI: Başlıklar için Playfair Display eklendi
        mono: ['Inconsolata', 'monospace'], // PREMIUM UI: Monospace font eklendi
      },
      borderRadius: {
        '4xl': '2rem',
        'glass': '1.5rem' // PREMIUM UI: Glassmorphism için özel border radius
      },
      boxShadow: {
        'glass-light': '0 4px 6px rgba(255, 255, 255, 0.08)', // PREMIUM UI: Açık renkli glassmorphism gölge
        'glass-dark': '0 4px 6px rgba(0, 0, 0, 0.2)', // PREMIUM UI: Koyu renkli glassmorphism gölge
        'brand-glow': '0 0 15px rgba(100, 255, 200, 0.3)', // PREMIUM UI: Brand rengi için glow efekti
        'glass-hero': '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 30px rgba(100, 255, 200, 0.15)' // PREMIUM UI: Daha derin bir glassmorphism gölgesi
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #34d399, #10b981, #059669)', // PREMIUM UI: Primary butonlar için gradient (emerald tonları)
        'app-gradient': 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #134e4a 100%)', // PREMIUM UI: Uygulama ana arka planı için gradient
        'glass-gradient-border': 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)'
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease both',
        'fade-in': 'fadeIn 0.3s ease both',
        'slide-in': 'slideIn 0.35s cubic-bezier(0.16,1,0.3,1) both',
      },
      transitionTimingFunction: {
        'ease-glass': 'cubic-bezier(0.16, 1, 0.3, 1)', // PREMIUM UI: Glassmorphism ve genel animasyonlar için custom easing fonksiyonu
      }
    },
  },
  plugins: [],
} satisfies Config;
