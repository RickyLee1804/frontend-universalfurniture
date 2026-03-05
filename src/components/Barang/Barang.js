import React, { useState } from 'react';
import BarangTable from './BarangTable';
import TambahBarang from '../TambahBarang/TambahBarang';
import Success from '../SuccessModal/Success';
import './Barang.css';

const Barang = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 1, image: '🪑', nama: 'Kursi Santai', kategori: 'Kursi', jumlah: 100, minStock: 50 },
    { id: 2, image: '🍽️', nama: 'Meja Makan', kategori: 'Meja', jumlah: 100, minStock: 50 },
    { id: 3, image: '🚪', nama: 'Lemari Pakaian', kategori: 'Lemari', jumlah: 100, minStock: 50 },
    { id: 4, image: '🛋️', nama: 'Sofa', kategori: 'Sofa', jumlah: 100, minStock: 50 },
    { id: 5, image: '🛏️', nama: 'Meja Rias', kategori: 'Meja', jumlah: 100, minStock: 50 },
    { id: 6, image: '💺', nama: 'Kursi Kantor', kategori: 'Kursi', jumlah: 100, minStock: 50 },
    { id: 7, image: '🛏️', nama: 'Springbed', kategori: 'Kasur', jumlah: 100, minStock: 50 },
    { id: 8, image: '📚', nama: 'Rak Buku', kategori: 'Rak', jumlah: 100, minStock: 50 },
    { id: 9, image: '💡', nama: 'Lampu Hias', kategori: 'Lampu', jumlah: 100, minStock: 50 },
    { id: 10, image: '🪑', nama: 'Kursi Plastik', kategori: 'Kursi', jumlah: 100, minStock: 50 },
  ]);

  const filteredItems = items.filter(item =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus item ini?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleView = (item) => {
    alert(`Detail:\nNama: ${item.nama}\nKategori: ${item.kategori}`);
  };

  const handleEdit = (item) => {
    alert(`Edit: ${item.nama}`);
  };

  const handleAddBarang = () => {
    setIsModalOpen(true);
  };

  const handleSubmitBarang = (formData) => {
    const newItem = {
      id: items.length + 1,
      image: formData.gambarPreview || '📦',
      nama: formData.namaBarang,
      kategori: formData.kategori,
      jumlah: parseInt(formData.jumlah),
      minStock: parseInt(formData.minimumStok),
    };
    setItems([...items, newItem]);
    setIsModalOpen(false);
    setIsSuccessOpen(true);
  };

  return (
    <div className="barang-wrapper">
      <div className="barang-content">
        {/* Actions Bar */}
        <div className="actions-bar">
          <h2 className="content-title">Data Barang</h2>

          <div className="actions-right" style={{display: 'flex', gap: '12px', alignItems: 'center', width: 'auto'}}>
            {/* Search Box - NO OUTER BOX, KUNING! */}
            <div className="search-box" style={{
              position: 'relative', 
              width: '200px', 
              minWidth: '200px', 
              maxWidth: '200px', 
              flexShrink: 0,
              background: 'transparent',
              border: 'none',
              padding: 0,
              margin: 0
            }}>
              <input
                type="text"
                placeholder="Cari..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                style={{
                  width: '100%',
                  padding: '12px 50px 12px 20px',
                  border: '2px solid #fbbf24',
                  borderRadius: '50px',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#333'
                }}
              />
              <svg 
                className="search-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '22px',
                  height: '22px',
                  color: '#fbbf24',
                  pointerEvents: 'none'
                }}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>

            {/* Add Button - KUNING */}
            <button 
              className="add-btn" 
              onClick={handleAddBarang}
              style={{
                backgroundColor: '#fbbf24',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '50px',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <svg className="add-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width: '20px', height: '20px'}}>
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Tambah Barang</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <BarangTable
          items={filteredItems}
          onDelete={handleDelete}
          onView={handleView}
          onEdit={handleEdit}
        />
      </div>

      {/* Modal Tambah Barang */}
      <TambahBarang 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitBarang}
      />

      {/* Success Modal */}
      <Success 
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />
    </div>
  );
};

export default Barang;