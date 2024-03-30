import React from 'react';
import { ConfigProvider } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <ConfigProvider theme={{token: {colorPrimary: '#00b96b'}}}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
