import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      {/* Left Section - Greeting */}
      <div className="topbar-left">
        <h1 className="greeting-title">Hello Jonny,</h1>
        <p className="greeting-subtitle">Dashboard</p>
      </div>

      {/* Right Section - Search & Profile */}
      <div className="topbar-right">
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Cari..."
            className="search-input"
          />
          <Search className="search-icon" />
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-avatar">
            J
          </div>
          <span className="profile-name">Jonny</span>
          <ChevronDown className="profile-chevron" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;