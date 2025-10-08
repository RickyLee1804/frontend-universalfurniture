import React from 'react';
import { Home, Package, FileText, ShoppingCart, CreditCard, FileBarChart, Users, LogOut } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Beranda', active: true },
    { icon: Package, label: 'Barang', active: false },
    { icon: FileText, label: 'Purchase Request', active: false },
    { icon: ShoppingCart, label: 'Purchase Order', active: false },
    { icon: CreditCard, label: 'Transaksi', active: false },
    { icon: FileBarChart, label: 'Pembukuan', active: false },
    { icon: Package, label: 'Stock Opname', active: false },
    { icon: Users, label: 'Supplier', active: false }
  ];

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          U
        </div>
        <span className="logo-text">UNIVERSAL</span>
      </div>

      {/* Menu Items */}
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={index} 
              className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
            >
              <IconComponent className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="sidebar-logout">
        <div className="logout-icon">
          <LogOut className="logout-icon-svg" />
        </div>
        <span className="logout-text">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;