import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // PREMIUM UI: Router desteği eklendi
import App from '../src/App';

test('App renders AppShell and initial route (Dashboard)', () => {
  // PREMIUM UI: App bileşeni artık ana layout ve router içerdiği için test güncellendi.
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // AppShell'in parçalarını kontrol et
  expect(screen.getByRole('banner')).toBeInTheDocument(); // Header (Top Bar)
  // PREMIUM UI: İki farklı navigasyon olduğu için her ikisini de spesifik olarak kontrol ediyoruz.
  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument(); // Desktop Sidebar Nav
  expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument();  // Mobile Bottom Nav

  // İlk render edilen sayfanın (Dashboard) başlığını kontrol et
  expect(screen.getByText(/Your Premium Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Overview of your key metrics./i)).toBeInTheDocument();
});
