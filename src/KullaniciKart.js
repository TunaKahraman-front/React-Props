import React, { useState } from 'react';
import './KullaniciKart.css';
  // useState ile detayGoster tanımlanmıştır
function KullaniciKart({ kullanici }) {
  const [detayGoster, setDetayGoster] = useState(false);
  // Kartlar oluşturulmuştur
  return (
    <div className="kart">
      <h2>{kullanici.ad} - {kullanici.yas}</h2>
      <p className={kullanici.aktif ? 'aktif' : 'pasif'}>
        {kullanici.aktif ? 'Aktif' : 'Pasif'}
      </p>
      <button onClick={() => setDetayGoster(!detayGoster)}>
        {detayGoster ? 'Gizle' : 'Göster Detay'}
      </button>
      {detayGoster && (
        <ul>
          {kullanici.hobiler.map((hobi, i) => (
            <li key={i}>{hobi}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KullaniciKart;
