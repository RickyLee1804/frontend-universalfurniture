import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import CardStat from '../Shared/Cardstat';
import { AlertTriangle, ChevronDown } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState('Tahun');
  
  // Data untuk chart
  const chartData = [
    { day: 1, lastMonth: 3, lastWeek: 2 },
    { day: 2, lastMonth: 4, lastWeek: 3 },
    { day: 3, lastMonth: 5, lastWeek: 4 },
    { day: 4, lastMonth: 6, lastWeek: 3 },
    { day: 5, lastMonth: 7, lastWeek: 5 },
    { day: 6, lastMonth: 8, lastWeek: 6 },
    { day: 7, lastMonth: 9, lastWeek: 7 },
    { day: 8, lastMonth: 6, lastWeek: 5 },
    { day: 9, lastMonth: 8, lastWeek: 6 },
    { day: 10, lastMonth: 9, lastWeek: 7 },
    { day: 11, lastMonth: 10, lastWeek: 8 },
    { day: 12, lastMonth: 11, lastWeek: 9 }
  ];

  const maxValue = Math.max(...chartData.flatMap(d => [d.lastMonth, d.lastWeek]));

  // Data untuk cards
  const statsData = [
    {
      title: "Jumlah Stok",
      value: "1,500",
      trend: "up",
      percentage: "8.5%",
      period: "Bulan ini",
      icon: "package",
      bgColor: "orange"
    },
    {
      title: "Barang Masuk",
      value: "250", 
      trend: "up",
      percentage: "1.3%",
      period: "Bulan ini",
      icon: "package",
      bgColor: "orange"
    },
    {
      title: "Barang Keluar",
      value: "150",
      trend: "down", 
      percentage: "4.3%",
      period: "Bulan ini",
      icon: "package",
      bgColor: "orange"
    }
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="main-content">
        <Topbar />
        
        {/* Stats Cards */}
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <CardStat key={index} {...stat} />
          ))}
          
          {/* Warning Card - Custom */}
          <div className="card-stat warning-card">
            <div className="warning-content">
              <div className="warning-text">
                <div className="warning-header">
                  <AlertTriangle className="warning-icon" />
                  <span className="warning-title">WARNING!</span>
                </div>
                <p className="warning-subtitle">Stok Barang Menipis!</p>
                <p className="warning-desc">5 item dengan stok rendah</p>
                <button className="warning-btn">Lihat Detail</button>
              </div>
              <div className="warning-icon-bg">
                <AlertTriangle className="warning-icon-main" />
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section - Full Width di Tengah */}
        <div className="chart-section-full">
          <div className="chart-header">
            <div className="chart-info">
              <h3 className="chart-title">Pendapatan Penjualan</h3>
              <p className="chart-amount">IDR 10.000.000</p>
              <p className="chart-period">Sales from 1-12 Dec, 2024</p>
            </div>
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="year-select"
            >
              <option>Tahun</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>

          {/* Chart */}
          <div className="chart-container-fixed">
            <div className="chart-bars">
              {chartData.map((item, index) => (
                <div key={index} className="chart-bar-group">
                  <div className="bars-container">
                    <div 
                      className="bar-last-month"
                      style={{ height: `${(item.lastMonth / maxValue) * 250}px` }}
                    ></div>
                    <div 
                      className="bar-last-week"
                      style={{ height: `${(item.lastWeek / maxValue) * 250}px` }}
                    ></div>
                  </div>
                  <span className="bar-label">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color-red"></div>
              <span className="legend-text">Last Month</span>
            </div>
            <div className="legend-item">
              <div className="legend-color-gray"></div>
              <span className="legend-text">Last Week</span>
            </div>
          </div>
        </div>

        {/* Bottom Grid - Activity (Kiri) dan Calendar (Kanan) */}
        <div className="bottom-grid">
          {/* Activity History - Kiri Bawah */}
          <div className="activity-section-bottom">
            <div className="activity-header">
              <h3 className="activity-title">Riwayat Aktivitas</h3>
              <button className="view-all-btn">View All</button>
            </div>
            
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-info">
                  <p className="activity-user">Owner</p>
                  <p className="activity-date">02 Oct, 2024</p>
                </div>
                <p className="activity-desc">Owner menyetujui purchase request</p>
              </div>
              
              <div className="activity-item">
                <div className="activity-info">
                  <p className="activity-user">Admin</p>
                  <p className="activity-date">02 Oct, 2024</p>
                </div>
                <p className="activity-desc">Admin menambahkan data barang terbaru</p>
              </div>
            </div>
          </div>

          {/* Calendar - Kanan Bawah */}
          <div className="calendar-section-bottom">
            <div className="calendar-header">
              <h3 className="calendar-title">Calendar</h3>
              <ChevronDown className="calendar-chevron" />
            </div>
            
            <div className="calendar-month">
              <p className="month-title">September 2024</p>
            </div>
            
            <div className="calendar-grid">
              <div className="calendar-day-header">SUN</div>
              <div className="calendar-day-header">MON</div>
              <div className="calendar-day-header">TUE</div>
              <div className="calendar-day-header">WED</div>
              <div className="calendar-day-header">THU</div>
              <div className="calendar-day-header">FRI</div>
              <div className="calendar-day-header">SAT</div>
              
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((day) => (
                <div 
                  key={day} 
                  className={`calendar-day ${day === 14 || day === 17 ? 'active-day' : ''}`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;