import React from 'react';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = ({ isSidebarCollapsed, toggleSidebar }) => {
  return (
    <Header style={{ padding: 0, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ marginLeft: '20px' }}>My Application</div>
      <Button
        type="text"
        icon={isSidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleSidebar}
        style={{
          marginRight: '20px',
          fontSize: '16px',
        }}
      />
    </Header>
  );
};

export default Navbar;
