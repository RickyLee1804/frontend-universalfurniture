import React, { useState } from 'react';
import './TambahBarang.css';

const TambahBarang = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    namaBarang: '',
    kategori: '',
    jumlah: '',
    minimumStok: '',
    gambar: null,
    gambarPreview: null,
  });

  const [isKategoriOpen, setIsKategoriOpen] = useState(false);

  const kategoriOptions = [
    'Meja',
    'Kasur',
    'Kursi',
    'Lemari',
    'Rak',
    'Sofa',
    'Lainnya'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          gambar: file,
          gambarPreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKategoriSelect = (kategori) => {
    setFormData(prev => ({
      ...prev,
      kategori: kategori
    }));
    setIsKategoriOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.namaBarang && formData.kategori && formData.jumlah && formData.minimumStok) {
      onSubmit(formData);
      setFormData({
        namaBarang: '',
        kategori: '',
        jumlah: '',
        minimumStok: '',
        gambar: null,
        gambarPreview: null,
      });
    } else {
      alert('Semua field harus diisi!');
    }
  };

  const handleReset = () => {
    onClose();
    setFormData({
      namaBarang: '',
      kategori: '',
      jumlah: '',
      minimumStok: '',
      gambar: null,
      gambarPreview: null,
    });
    setIsKategoriOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-icon">👑</div>
          <h2 className="modal-title">Data Barang</h2>
          <button className="modal-close" onClick={handleReset}>✕</button>
        </div>

        {/* Divider */}
        <div className="modal-divider"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="modal-form">
          {/* Nama Barang */}
          <div className="form-group">
            <label className="form-label">
              Nama Barang <span className="required">*</span>
            </label>
            <input
              type="text"
              name="namaBarang"
              value={formData.namaBarang}
              onChange={handleInputChange}
              placeholder="Masukkan nama barang"
              className="form-input"
            />
          </div>

          {/* Kategori Dropdown */}
          <div className="form-group">
            <label className="form-label">
              Kategori <span className="required">*</span>
            </label>
            <div className="dropdown-container">
              <button
                type="button"
                className={`dropdown-button ${formData.kategori ? 'selected' : ''}`}
                onClick={() => setIsKategoriOpen(!isKategoriOpen)}
              >
                {formData.kategori || 'Pilih Kategori'}
                <svg className={`dropdown-icon ${isKategoriOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {isKategoriOpen && (
                <div className="dropdown-menu">
                  {kategoriOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`dropdown-item ${formData.kategori === option ? 'active' : ''}`}
                      onClick={() => handleKategoriSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Jumlah */}
          <div className="form-group">
            <label className="form-label">
              Jumlah <span className="required">*</span>
            </label>
            <input
              type="number"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleInputChange}
              placeholder="Masukkan jumlah"
              className="form-input"
              min="0"
            />
          </div>

          {/* Minimum Stok */}
          <div className="form-group">
            <label className="form-label">
              Minimum Stok <span className="required">*</span>
            </label>
            <input
              type="number"
              name="minimumStok"
              value={formData.minimumStok}
              onChange={handleInputChange}
              placeholder="Masukkan minimum stok"
              className="form-input"
              min="0"
            />
          </div>

          {/* Upload Gambar */}
          <div className="form-group">
            <label className="form-label">
              Upload Gambar
            </label>
            <div className="upload-area">
              <input
                type="file"
                id="gambar-input"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
              />
              {formData.gambarPreview ? (
                <div className="image-preview">
                  <img src={formData.gambarPreview} alt="Preview" />
                  <button
                    type="button"
                    className="remove-image"
                    onClick={() => setFormData(prev => ({...prev, gambar: null, gambarPreview: null}))}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <label htmlFor="gambar-input" className="upload-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span>Klik untuk upload gambar</span>
                </label>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button
              type="submit"
              className="btn-simpan"
            >
              Simpan
            </button>
            <button
              type="button"
              className="btn-kembali"
              onClick={handleReset}
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahBarang;