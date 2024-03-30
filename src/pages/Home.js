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

  return (
    <Layout>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} navigate={navigate} />
      <Layout>
        <Navbar isSidebarCollapsed={collapsed} toggleSidebar={toggleSidebar} />
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
