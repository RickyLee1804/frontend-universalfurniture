import React from 'react';
import { Home, Package, FileText, ShoppingCart, CreditCard, FileBarChart, Users, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Beranda', path: '/dashboard' },
    { icon: Package, label: 'Barang', path: '/barang' },
    { icon: FileText, label: 'Purchase Request', path: '/purchase-request' },
    { icon: ShoppingCart, label: 'Purchase Order', path: '/purchase-order' },
    { icon: CreditCard, label: 'Transaksi', path: '/transaksi' },
    { icon: FileBarChart, label: 'Pembukuan', path: '/pembukuan' },
    { icon: Package, label: 'Stock Opname', path: '/stock-opname' },
    { icon: Users, label: 'Supplier', path: '/supplier' }
  ];

  const handleLogout = () => {
    console.log('Logout clicked');
    // navigate('/login');
  };

  return (
    <div className="sidebar">
      {/* Logo Section - Pakai logoUF1.png */}
      <div className="sidebar-logo">
        <img 
          src="/images/logoUF1.png" 
          alt="Universal Logo" 
          className="logo-icon-img" 
        />
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <div
              key={index}
              className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <IconComponent className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* Logout Section */}
      <div className="sidebar-logout" onClick={handleLogout}>
        <div className="logout-icon">
          <LogOut className="logout-icon-svg" />
        </div>
        <span className="logout-text">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;