import React from 'react';
import KullaniciKart from './KullaniciKart';
    // Gerekli tanımlar yapılmıştır
function KullaniciPanosu() {
  const kullanicilar = [
    { ad: 'Tuna', yas: 18, aktif: true, hobiler: ['Tarih', 'Basketbol'] },
    { ad: 'Elif', yas: 12, aktif: false, hobiler: ['Resim', 'futbol'] },
    { ad: 'Hasan', yas: 55, aktif: true, hobiler: ['Oyun', 'Müzik'] },
  ];

  return (
    <div>
      {kullanicilar.map((kullanici, i) => (
        <KullaniciKart key={i} kullanici={kullanici} />
      ))}
    </div>
  );
}

export default KullaniciPanosu;
