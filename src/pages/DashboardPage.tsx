import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Plus, Users, DollarSign, HelpCircle } from 'lucide-react'; // PREMIUM UI: Lucide icon'lar
import { motion } from 'framer-motion';
import { MetricCard } from '@/components/ui/MetricCard'; // MetricCard import eklendi

// PREMIUM UI: Bento Grid benzeri bir layout için staggered animasyon konteyneri
const containerVariants = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

export function DashboardPage() {
  return (
    <PageContainer 
      title="Your Premium Dashboard"
      description="Overview of your key metrics and recent activities."
      actions={
        <Button icon={Plus} variant="primary" onClick={() => alert('New project created!')}>New Project</Button> // PREMIUM UI: onClick handler eklendi
      }
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
        variants={containerVariants} 
        initial="initial" 
        animate="animate" // PREMIUM UI: Metrik kartları için staggered giriş animasyonu
      >
        <motion.div variants={itemVariants}>
          <MetricCard 
            title="Total Revenue"
            value="$45,231.89"
            delta={12}
            icon={DollarSign}
            variant="success"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard 
            title="New Users"
            value="+2,350"
            delta={-4}
            icon={Users}
            variant="danger"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard 
            title="Conversion Rate"
            value="12.8%"
            delta={0.8}
            icon={HelpCircle}
          />
        </motion.div>
      </motion.div>

      {/* PREMIUM UI: Diğer dashboard bölümleri buraya eklenebilir */}
      <motion.div 
        className="mt-8 p-6 glass-card" // PREMIUM UI: Reusable glass-card sınıfı uygulandı
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Recent Activity</h3>
        <p className="text-[var(--text-muted)]">No recent activity yet. Start by creating a new project!</p>
      </motion.div>
    </PageContainer>
  );
}
