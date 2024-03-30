import React, { useEffect, useState } from "react";
import { Layout, Row, Col } from "antd";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StoryCard from "../components/StoryCard";
import { getAllStories, getImage } from "../api/lib/Story";

const { Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [stories, setStories] = useState([]);
  const [images, setImagesList] = useState([]);
  const navigate = useNavigate();

  // Fetch stories
  useEffect(() => {
    const fetchStoriesAndImages = async () => {
      const response = await getAllStories();
      const stories = await response.json();
      setStories(stories);

      const imagesPromises = stories.map(async (story) => {
        try {
          const response = await getImage(story._id);
          if (!response.ok) {
            throw new Error(
              `Network response was not ok for story ID ${story._id}`
            );
          }
          const imageBlob = await response.blob();
          const imageUrl = URL.createObjectURL(imageBlob);
          console.log("Fetched image:", imageUrl);
          return { storyId: story._id, src: imageUrl };
        } catch (error) {
          console.error("Error fetching image:", error);
          return { storyId: story._id, src: "" };
        }
      });

      const images = await Promise.all(imagesPromises);
      setImagesList(images);
    };
    fetchStoriesAndImages();
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
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

  return (
    <Layout style={layoutStyle}>
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        navigate={navigate}
      />
      <Layout>
        <Navbar isSidebarCollapsed={collapsed} toggleSidebar={toggleSidebar} />
        <Content style={contentStyle}>
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
            Enjoy your next story
          </h2>
          <Row gutter={[16, 16]}>
            {images.length === 0 ? (
              <div>Loading stories...</div>
            ) : (
              stories.map((story) => (
                <Col key={story._id} xs={24} sm={12} md={8} lg={6}>
                  <StoryCard
                    title={story.title}
                    description={story.description}
                    image={images.find((img) => img.storyId === story._id)}
                    navigate={navigate}
                    storyId={story._id}
                  />
                </Col>
              ))
            )}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
