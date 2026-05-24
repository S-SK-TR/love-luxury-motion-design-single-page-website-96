import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../src/App';

test('renders the AppShell and Dashboard on initial load', async () => {
  // PREMIUM UI: App bileşeni artık router ve AppShell içeriyor.
  // Bu yüzden testleri güncelledik.
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // AppShell'in logo kısmını kontrol et
  expect(screen.getByText('Premium App')).toBeInTheDocument();

  // Sidebar'daki Dashboard navigasyon linkini kontrol et (desktop nav'ı hedefleyerek)
  // PREMIUM UI: Aynı isimde birden fazla link olduğu için erişilebilirlik etiketleri ile hedefleme yapıldı.
  const desktopNav = screen.getByRole('navigation', { name: /primary navigation/i });
  expect(desktopNav.getByRole('link', { name: /Dashboard/i })).toBeInTheDocument();

  // Dashboard sayfasının içeriğini kontrol et (örn: ana başlığı)
  expect(screen.getByText(/Your Premium Dashboard/i)).toBeInTheDocument();
});
