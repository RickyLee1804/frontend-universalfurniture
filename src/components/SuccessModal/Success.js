import React, { useEffect } from 'react';
import './Success.css';

const Success = ({ isOpen, onClose, message = 'Data berhasil disimpan!' }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="success-overlay" onClick={onClose}>
      <div className="success-container" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon">✓</div>
        <h2 className="success-title">Data berhasil disimpan!</h2>
        <p className="success-text">Silakan lanjutkan untuk menambah barang lainnya.</p>
        <button className="success-btn" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Success;