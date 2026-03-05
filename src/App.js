import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/Dashboard';
import Barang from './components/Barang/Barang';
import PurchaseRequest from './components/PurchaseRequest/PurchaseRequest';
import PurchaseOrder from './components/PurchaseOrder/PurchaseOrder';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Routes>
      {/* Login - Tanpa Sidebar */}
      <Route path="/" element={<Login />} />
      
      {/* SEMUA ROUTE DENGAN MAINLAYOUT (Sidebar + Topbar) */}
      
      {/* Dashboard - DENGAN Search bar */}
      <Route
        path="/dashboard"
        element={
          <MainLayout pageTitle="Dashboard" showSearch={true}>
            <Dashboard />
          </MainLayout>
        }
      />
      
      {/* Barang - TANPA Search bar */}
      <Route
        path="/barang"
        element={
          <MainLayout pageTitle="Barang" showSearch={false}>
            <Barang />
          </MainLayout>
        }
      />
      
      {/* Purchase Request */}
      <Route
        path="/purchase-request"
        element={
          <MainLayout pageTitle="Purchase Request">
            <PurchaseRequest />
          </MainLayout>
        }
      />
      
      {/* Purchase Order */}
      <Route
        path="/purchase-order"
        element={
          <MainLayout pageTitle="Purchase Order">
            <PurchaseOrder />
          </MainLayout>
        }
      />
      
      {/* Transaksi */}
      <Route
        path="/transaksi"
        element={
          <MainLayout pageTitle="Transaksi">
            <div style={{ padding: '32px' }}>
              <h2>Transaksi Page</h2>
            </div>
          </MainLayout>
        }
      />
      
      {/* Pembukuan */}
      <Route
        path="/pembukuan"
        element={
          <MainLayout pageTitle="Pembukuan">
            <div style={{ padding: '32px' }}>
              <h2>Pembukuan Page</h2>
            </div>
          </MainLayout>
        }
      />
      
      {/* Stock Opname */}
      <Route
        path="/stock-opname"
        element={
          <MainLayout pageTitle="Stock Opname">
            <div style={{ padding: '32px' }}>
              <h2>Stock Opname Page</h2>
            </div>
          </MainLayout>
        }
      />
      
      {/* Supplier */}
      <Route
        path="/supplier"
        element={
          <MainLayout pageTitle="Supplier">
            <div style={{ padding: '32px' }}>
              <h2>Supplier Page</h2>
            </div>
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;