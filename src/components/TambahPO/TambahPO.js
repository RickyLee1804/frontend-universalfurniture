import React, { useState } from 'react';
import './TambahPO.css';

const TambahPO = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    referensi: '',
    supplier: '',
    tanggal: '',
    status: 'Diajukan',
  });

  const suppliers = [
    'PT Indah Abadi',
    'PT Jaya Cemerlang',
    'PT Informa',
    'PT Industri Furniture',
  ];

  const statuses = ['Diajukan', 'Disetujui', 'Ditolak', 'Selesai'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.referensi && formData.supplier && formData.tanggal && formData.status) {
      onSubmit(formData);
      setFormData({
        referensi: '',
        supplier: '',
        tanggal: '',
        status: 'Diajukan',
      });
    } else {
      alert('Semua field harus diisi!');
    }
  };

  const handleReset = () => {
    onClose();
    setFormData({
      referensi: '',
      supplier: '',
      tanggal: '',
      status: 'Diajukan',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="po-modal-overlay" onClick={handleReset}>
      <div className="po-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="po-modal-header">
          <h2 className="po-modal-title">Tambah Purchase Order</h2>
          <button className="po-modal-close" onClick={handleReset}>✕</button>
        </div>

        {/* Divider */}
        <div className="po-modal-divider"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="po-modal-form">
          {/* Referensi */}
          <div className="po-form-group">
            <label className="po-form-label">
              Referensi <span className="po-required">*</span>
            </label>
            <input
              type="text"
              name="referensi"
              value={formData.referensi}
              onChange={handleInputChange}
              placeholder="Masukkan referensi"
              className="po-form-input"
            />
          </div>

          {/* Supplier */}
          <div className="po-form-group">
            <label className="po-form-label">
              Supplier <span className="po-required">*</span>
            </label>
            <select
              name="supplier"
              value={formData.supplier}
              onChange={handleInputChange}
              className="po-form-select"
            >
              <option value="">Pilih Supplier</option>
              {suppliers.map((supplier, idx) => (
                <option key={idx} value={supplier}>{supplier}</option>
              ))}
            </select>
          </div>

          {/* Tanggal */}
          <div className="po-form-group">
            <label className="po-form-label">
              Tanggal <span className="po-required">*</span>
            </label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleInputChange}
              className="po-form-input"
            />
          </div>

          {/* Status */}
          <div className="po-form-group">
            <label className="po-form-label">
              Status <span className="po-required">*</span>
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="po-form-select"
            >
              {statuses.map((status, idx) => (
                <option key={idx} value={status}>{status}</option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="po-form-buttons">
            <button type="submit" className="po-btn-simpan">Simpan</button>
            <button type="button" className="po-btn-kembali" onClick={handleReset}>Kembali</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahPO;