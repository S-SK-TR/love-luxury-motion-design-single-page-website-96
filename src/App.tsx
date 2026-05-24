import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell'; // PREMIUM UI: AppShell bileşeni eklendi
import { DashboardPage } from './pages/DashboardPage'; // PREMIUM UI: Dashboard sayfası eklendi
import { PageTransition } from './components/layout/PageTransition'; // PREMIUM UI: Sayfa geçişleri için

function App() {
  return (
    <Routes> {/* PREMIUM UI: React Router Routes kullanıldı */}
      <Route path="/" element={<AppShell />}> {/* PREMIUM UI: AppShell ana layout olarak belirlendi */}
        <Route index element={<PageTransition><DashboardPage /></PageTransition>} /> {/* PREMIUM UI: Dashboard sayfası ana sayfa olarak tanımlandı */}
        {/* PREMIUM UI: Diğer sayfalar buraya eklenecek */}
        <Route path="analytics" element={<PageTransition><div>Analytics Page</div></PageTransition>} />
        <Route path="settings" element={<PageTransition><div>Settings Page</div></PageTransition>} />
        <Route path="*" element={<PageTransition><div>404 Not Found</div></PageTransition>} />
      </Route>
    </Routes>
  );
}

export default App;
