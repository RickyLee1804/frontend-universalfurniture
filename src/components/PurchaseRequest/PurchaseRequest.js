import React, { useState } from "react";
import "./PurchaseRequest.css";
import { FaSearch, FaFilter, FaPlus, FaEye, FaTrash, FaPen } from "react-icons/fa";

const PurchaseRequest = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    { id: 1, referensi: "P0001", tanggal: "2025-11-30", status: "Diajukan" },
    { id: 2, referensi: "P0002", tanggal: "2025-11-28", status: "Disetujui" },
    { id: 3, referensi: "P0003", tanggal: "2025-11-25", status: "Ditolak" },
    { id: 4, referensi: "P0004", tanggal: "2025-11-20", status: "Disetujui" },
    { id: 5, referensi: "P0005", tanggal: "2025-11-17", status: "Selesai" },
    { id: 6, referensi: "P0006", tanggal: "2025-11-15", status: "Selesai" },
    { id: 7, referensi: "P0007", tanggal: "2025-11-14", status: "Selesai" },
    { id: 8, referensi: "P0008", tanggal: "2025-11-12", status: "Selesai" },
    { id: 9, referensi: "P0009", tanggal: "2025-11-10", status: "Selesai" },
    { id: 10, referensi: "P0010", tanggal: "2025-11-05", status: "Selesai" },
  ];

  const statusClass = {
    Diajukan: "status diajukan",
    Disetujui: "status disetujui",
    Ditolak: "status ditolak",
    Selesai: "status selesai",
  };

  const filteredItems = items.filter((item) =>
    item.referensi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pr-container">

      <div className="pr-card">

        <div className="pr-top">

          <h2>Data Purchase Request</h2>

          <div className="pr-actions">

            {/* Search Box - Icon di Kiri */}
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Cari..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Filter Button dengan Icon Dropdown */}
            <button className="btn-filter">
              Filter
              <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {/* Tambah Purchase Request Button */}
            <button className="btn-add">
              <FaPlus /> Tambah Purchase Request
            </button>

          </div>
        </div>

        <table className="pr-table">

          <thead>
            <tr>
              <th>No.</th>
              <th>Referensi</th>
              <th>Tanggal</th>
              <th>Status</th>
              <th style={{textAlign:"right"}}>Aksi</th>
            </tr>
          </thead>

          <tbody>

            {filteredItems.map((item, index) => (
              <tr key={item.id}>

                <td>{index + 1}</td>
                <td>{item.referensi}</td>
                <td>{item.tanggal}</td>

                <td>
                  <span className={statusClass[item.status]}>
                    {item.status}
                  </span>
                </td>

                <td className="aksi">

                  <button className="btn-edit">
                    <FaPen />
                  </button>

                  <button className="btn-view">
                    <FaEye />
                  </button>

                  <button className="btn-delete">
                    <FaTrash />
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        <div className="pr-pagination">

          <div>
            <span>10 items per page</span>
            <span style={{marginLeft:"10px"}}>1-10 of 100 items</span>
          </div>

          <div className="pages">
            <button>{"<"}</button>
            <span className="active">1</span>
            <span>of 10 pages</span>
            <button>{">"}</button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PurchaseRequest;