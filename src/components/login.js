import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Side - Login Form */}
      <div className="login-form">
        <div className="form-content">
          {/* Logo Perusahaan di Tengah */}
          <div className="company-logo-section">
            <img 
              src="/images/logoUF1.png" 
              alt="Universal Furniture Logo" 
              className="company-logo"
            />
          </div>

          <h2 className="form-title">Sistem Informasi Manajemen Universal Furniture</h2>
          <p className="form-subtitle">Silahkan Login!</p>

          {/* Username Field */}
          <div className="input-group">
            <label>Username</label>
            <div className="input-wrapper">
              <input type="email" placeholder="Masukkan Email" />
              <div className="input-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input type="password" placeholder="Masukkan Password" />
              <div className="input-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1c1.71,0,3.1,1.39,3.1,3.1V8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="forgot-password">
            <a href="#">Lupa Password?</a>
          </div>

          {/* Login Button */}
          <button className="login-button">Login</button>

          {/* Back Link */}
          <div className="back-link">
            <a href="#">Kembali</a>
          </div>
        </div>
      </div>

      {/* Right Side - Yellow Background */}
      <div className="right-section">
      </div>
    </div>
  );
};

export default Login;