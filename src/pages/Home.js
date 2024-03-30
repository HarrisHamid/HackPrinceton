import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
  const handleClickHome = () => {
    navigate('/');
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
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
      <Layout>
        <Header>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content>
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
