import React from 'react';
import { Layout } from 'antd';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const { Header } = Layout;

const Navbar = ({ isSidebarCollapsed, toggleSidebar }) => {
  return (
    <Header style={{ padding: 0, background: '#fff', display: 'flex', alignItems: 'center' }}>
      <div style={{ marginLeft: '20px' }}>
        <h2>Polyglot</h2>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <LoginButton />
        <LogoutButton />
      </div>
    </Header>
  );
};

export default Navbar;
