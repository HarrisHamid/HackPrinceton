import React from 'react';
import { Layout, Menu } from 'antd';
import { BookFilled } from '@ant-design/icons';

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
          }
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
