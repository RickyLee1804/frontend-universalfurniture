// src/App.js
import React from 'react';
import Login from './components/login'; // Memanggil komponen login.js
import './styles/App.css'; // Memanggil styling global

function App() {
  return (
    <div className="App">
      <Login /> {/* Menampilkan halaman login */}
    </div>
  );
}

export default App;
