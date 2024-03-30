import React from 'react';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const { Header } = Layout;

const Navbar = ({ isSidebarCollapsed, toggleSidebar }) => {
  return (
    <Header style={{ padding: 0, background: '#fff', display: 'flex', alignItems: 'center' }}>
      <Button
        type="text"
        icon={isSidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleSidebar}
        style={{
          marginLeft: '20px',
          fontSize: '16px',
        }}
      />
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
