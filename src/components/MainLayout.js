import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './MainLayout.css';

const MainLayout = ({ children, pageTitle = 'Dashboard', showSearch = false }) => {
  return (
    <div className="main-layout-container">
      <Sidebar />
      <div className="layout-content">
        <Topbar title={pageTitle} showSearch={showSearch} />
        <div className="layout-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;