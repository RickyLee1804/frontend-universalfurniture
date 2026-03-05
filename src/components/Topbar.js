import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, User, Key, RefreshCw, LogOut, Search } from 'lucide-react';
import './Topbar.css';

const Topbar = ({ title = 'Dashboard', showSearch = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isDashboard = title === 'Dashboard';

  return (
    <div className="topbar">
      {/* Left Section - Title & Subtitle */}
      <div className="topbar-left">
        {isDashboard ? (
          <>
            <h1 className="greeting-title">Hello Jonny,</h1>
            <p className="greeting-subtitle">{title}</p>
          </>
        ) : (
          <>
            <h1 className="greeting-title">{title}</h1>
            <p className="greeting-subtitle">
              Manajemen Data Barang <span className="brand-name">Universal Furniture</span>
            </p>
          </>
        )}
      </div>

      {/* Right Section - Search + Profile */}
      <div className="topbar-right">
        {/* Search Bar - Hanya tampil di Dashboard */}
        {showSearch && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Cari..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <Search className="search-icon" size={20} />
          </div>
        )}

        {/* Profile Section */}
        <div className="profile-wrapper" ref={dropdownRef}>
          <div className="profile-section" onClick={toggleDropdown}>
            <div className="profile-avatar">J</div>
            <span className="profile-name">Jonny</span>
            <ChevronDown 
              className={`profile-chevron ${isDropdownOpen ? 'chevron-open' : ''}`} 
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <User className="dropdown-icon" style={{ color: '#3b82f6' }} />
                <span>Kelola Akun</span>
              </div>
              
              <div className="dropdown-item">
                <Key className="dropdown-icon" style={{ color: '#ec4899' }} />
                <span>Ganti Password</span>
              </div>
              
              <div className="dropdown-item">
                <RefreshCw className="dropdown-icon" style={{ color: '#8b5cf6' }} />
                <span>Riwayat Aktivitas</span>
              </div>
              
              <div className="dropdown-divider"></div>
              
              <div className="dropdown-item logout">
                <LogOut className="dropdown-icon" style={{ color: '#ef4444' }} />
                <span>Log out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;