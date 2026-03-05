import React, { useState } from 'react';
import './BarangTable.css';

const BarangTable = ({ items, onDelete, onView, onEdit }) => {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="table-container">
      <table className="barang-table">
        <thead>
          <tr>
            <th style={{width: '60px'}}>No.</th>
            <th style={{width: '120px'}}>Gambar</th>
            <th style={{width: '200px'}}>Nama Barang</th>
            <th style={{width: '120px'}}>Kategori</th>
            <th style={{width: '100px'}}>Jumlah</th>
            <th style={{width: '120px'}}>Minimum stok</th>
            <th style={{width: '150px'}}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.length > 0 ? (
            displayedItems.map((item, index) => (
              <tr key={item.id}>
                <td>{startIndex + index + 1}</td>
                <td style={{textAlign: 'center'}}>
                  {item.image.startsWith('data:') ? (
                    <img src={item.image} alt="Gambar" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '6px'}} />
                  ) : (
                    <span style={{fontSize: '48px'}}>{item.image}</span>
                  )}
                </td>
                <td>{item.nama}</td>
                <td>{item.kategori}</td>
                <td style={{textAlign: 'center'}}>{item.jumlah}</td>
                <td style={{textAlign: 'center'}}>{item.minStock}</td>
                <td style={{textAlign: 'center'}}>
                  <button className="btn-edit" onClick={() => onEdit(item)} title="Edit">
                    <EditIcon />
                  </button>
                  <button className="btn-view" onClick={() => onView(item)} title="Lihat">
                    <EyeIcon />
                  </button>
                  <button className="btn-delete" onClick={() => onDelete(item.id)} title="Hapus">
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{textAlign: 'center', padding: '40px', color: '#9ca3af'}}>
                Tidak ada data barang
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination">
        <div className="pagination-left">
          <span className="pagination-items">10</span>
          <span className="pagination-text">items per page</span>
          <span className="pagination-range">1-{Math.min(itemsPerPage, items.length)} of {items.length} items</span>
        </div>
        <div className="pagination-right">
          <span className="pagination-page">{currentPage}</span>
          <span className="pagination-text">of {totalPages} pages</span>
          <button 
            className="pagination-nav-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          >
            ‹
          </button>
          <button 
            className="pagination-nav-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/>
    <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-9l-1 1H5v2h14V4z"/>
  </svg>
);

export default BarangTable;