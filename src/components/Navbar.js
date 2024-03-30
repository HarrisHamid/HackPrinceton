import React from 'react';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const { Header } = Layout;

const Navbar = ({ isSidebarCollapsed, toggleSidebar }) => {
  return (
    <Header style={{ padding: 0, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ marginLeft: '20px' }}>
        <h2>Storybook</h2>
      </div>
      <Button
        type="text"
        icon={isSidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleSidebar}
        style={{
          marginLeft: '20px',
          fontSize: '16px',
        }}
      />
      <LoginButton />
      <LogoutButton />
    </Header>
  );
};

export default Navbar;
