import React, { useState } from 'react';
import './PurchaseOrder.css';

const PurchaseOrder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSupplier, setFilterSupplier] = useState('');
  const [sortBy, setSortBy] = useState('tanggal');
  const [items, setItems] = useState([
    { id: 1, referensi: 'P0001', supplier: 'PT Indah Abadi', tanggal: '2025-11-30', status: 'Diajukan' },
    { id: 2, referensi: 'P0002', supplier: 'PT Jaya Cemerlang', tanggal: '2025-11-28', status: 'Disetujui' },
    { id: 3, referensi: 'P0003', supplier: 'PT Informa', tanggal: '2025-11-25', status: 'Ditolak' },
    { id: 4, referensi: 'P0004', supplier: 'PT Indah Abadi', tanggal: '2025-11-20', status: 'Disetujui' },
    { id: 5, referensi: 'P0005', supplier: 'PT Jaya Cemerlang', tanggal: '2025-11-17', status: 'Selesai' },
    { id: 6, referensi: 'P0006', supplier: 'PT Informa', tanggal: '2025-11-15', status: 'Selesai' },
    { id: 7, referensi: 'P0007', supplier: 'PT Informa', tanggal: '2025-11-14', status: 'Selesai' },
    { id: 8, referensi: 'P0008', supplier: 'PT Indah Abadi', tanggal: '2025-11-12', status: 'Selesai' },
    { id: 9, referensi: 'P0009', supplier: 'PT Jaya Cemerlang', tanggal: '2025-11-10', status: 'Selesai' },
    { id: 10, referensi: 'P0010', supplier: 'PT Indah Abadi', tanggal: '2025-11-05', status: 'Selesai' },
  ]);

  const suppliers = [
    'PT Indah Abadi',
    'PT Jaya Cemerlang',
    'PT Informa',
    'PT Industri Furniture',
  ];

  const statusColors = {
    'Diajukan': { bg: '#fca5a5', text: '#dc2626' },
    'Disetujui': { bg: '#86efac', text: '#22c55e' },
    'Ditolak': { bg: '#fca5a5', text: '#dc2626' },
    'Selesai': { bg: '#bfdbfe', text: '#2563eb' },
  };

  const filteredItems = items.filter(item => {
    const matchSearch = item.referensi?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.supplier?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSupplier = !filterSupplier || item.supplier === filterSupplier;
    return matchSearch && matchSupplier;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'tanggal') {
      return new Date(b.tanggal) - new Date(a.tanggal);
    }
    return 0;
  });

  return (
    <div className="po-wrapper">
      <div className="po-content">
        {/* Data Purchase Order Section */}
        <div className="po-data-section">
          <h2 className="section-title">Data Purchase Order</h2>

          {/* Filters & Actions */}
          <div className="po-controls">
            <div className="filters-left">
              <button className="filter-icon-btn" title="Filter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M3 6h18M9 12h6M13 18h2"/>
                </svg>
              </button>
              
              <div className="filter-dropdown">
                <label>Filter By</label>
                <select value={filterSupplier} onChange={(e) => setFilterSupplier(e.target.value)} className="filter-select">
                  <option value="">Supplier</option>
                  {suppliers.map((supplier, idx) => (
                    <option key={idx} value={supplier}>{supplier}</option>
                  ))}
                </select>
              </div>

              <div className="filter-dropdown">
                <label>Tanggal</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
                  <option value="tanggal">Tanggal</option>
                </select>
              </div>

              <div className="filter-dropdown">
                <label>Status</label>
                <select className="filter-select">
                  <option value="">Status</option>
                </select>
              </div>
            </div>

            <div className="filters-right">
              {/* Search */}
              <div className="search-box">
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Cari..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              {/* Add Button */}
              <button className="add-btn">
                <svg className="add-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Tambah Purchase Order</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-container">
            <table className="po-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Referensi</th>
                  <th>Supplier</th>
                  <th>Tanggal</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {sortedItems.length > 0 ? (
                  sortedItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td className="referensi">{item.referensi}</td>
                      <td>{item.supplier}</td>
                      <td>{item.tanggal}</td>
                      <td>
                        <span className="status-badge" style={{
                          backgroundColor: statusColors[item.status]?.bg || '#e5e7eb',
                          color: statusColors[item.status]?.text || '#374151'
                        }}>
                          {item.status}
                        </span>
                      </td>
                      <td className="action-cell">
                        <button className="btn-action btn-edit" title="Edit">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/>
                            <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                          </svg>
                        </button>
                        <button className="btn-action btn-view" title="Lihat">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                          </svg>
                        </button>
                        <button className="btn-action btn-share" title="Share">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.15c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.44 9.31 6.77 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.77 0 1.44-.3 1.96-.77l7.12 4.16c-.057.21-.087.43-.087.67 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="empty-message">
                      Belum ada data Purchase Order. Tunggu hingga ada Purchase Request yang disetujui.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <div className="pagination-info">
              <span className="items-per-page">10</span>
              <span className="pagination-text">items per page</span>
              <span className="pagination-range">1-{Math.min(10, sortedItems.length)} of {sortedItems.length} items</span>
            </div>
            <div className="pagination-controls">
              <span className="page-info">1 of {Math.ceil(sortedItems.length / 10)} pages</span>
              <button className="pagination-btn" disabled>‹</button>
              <button className="pagination-btn" disabled>›</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;