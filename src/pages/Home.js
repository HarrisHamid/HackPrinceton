import React, { useState } from "react";
import { Layout } from "antd";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const { Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const layoutStyle = {
    minHeight: '100vh',
  };
  const contentStyle = {
    margin: '24px 16px',
    padding: 24,
    background: '#fff',
    minHeight: 'auto',
  };

  return (
    <Layout style={layoutStyle}>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} navigate={navigate} />
      <Layout>
        <Navbar isSidebarCollapsed={collapsed} toggleSidebar={toggleSidebar} />
        <Content style={contentStyle}>
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
