import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = ({ collapsed, navigate }) => {
  const handleClickHome = () => {
    navigate('/');
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'Home',
            onClick: handleClickHome,
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
