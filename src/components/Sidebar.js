import React from 'react';
import { Layout, Menu } from 'antd';
import { BookFilled, UserOutlined } from '@ant-design/icons';

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
            icon: <BookFilled />,
            label: 'Stories',
            onClick: handleClickHome,
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: 'Progress',
            onClick: () => navigate('/progress'),
          }
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
