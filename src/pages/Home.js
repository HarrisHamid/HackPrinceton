import React, { useState } from "react";
import { Layout, Row, Col, Modal } from "antd";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StoryCard from "../components/StoryCard";
import { useAuth0 } from "@auth0/auth0-react";
import NotLoggedIn from "../components/NotLoggedIn"; 

const { Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const { isAuthenticated } = useAuth0(); 

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleCardClick = (storyId) => {
    if (isAuthenticated) {
      navigate(`/story/${storyId}`);
    } else {
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const layoutStyle = {
    minHeight: "100vh",
  };
  const contentStyle = {
    margin: "24px 16px",
    padding: 24,
    background: "#fff",
    minHeight: "auto",
  };

  const stories = [
    {
      id: 1,
      title: "The Adventure Begins",
      imageUrl: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      title: "A Journey Through Time",
      imageUrl: "https://example.com/image2.jpg",
    },
    {
      id: 3,
      title: "Mysteries of the Unknown",
      imageUrl: "https://example.com/image3.jpg",
    },
  ];

  return (
    <Layout style={layoutStyle}>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <Navbar isSidebarCollapsed={collapsed} toggleSidebar={toggleSidebar} />
        <Content style={contentStyle}>
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
            Enjoy your next story
          </h2>
          <Row gutter={[16, 16]}>
            {stories.map((story) => (
              <Col key={story.id} xs={24} sm={12} md={8} lg={6}>
                <StoryCard
                  title={story.title}
                  imageUrl={story.imageUrl}
                  storyId={story.id}
                  onCardClick={() => handleCardClick(story.id)} 
                />
              </Col>
            ))}
          </Row>
          {/* Modal should be included here */}
          <Modal
            title="Error"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleOk}
            footer={null}
          >
            <NotLoggedIn />
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;