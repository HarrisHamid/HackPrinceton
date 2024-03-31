import React, { useEffect, useState } from "react";
import { Layout, Row, Col } from "antd";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import StoryCard from "../components/StoryCard";
import { getAllStories, getImage } from "../api/lib/Story";

const { Content } = Layout;

const Home = () => {
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
          return { storyId: story._id, src: imageUrl };
        } catch (error) {
          return { storyId: story._id, src: "" };
        }
      });

      const images = await Promise.all(imagesPromises);
      setImagesList(images);
    };
    fetchStoriesAndImages();
  }, []);

  const layoutStyle = {
    minHeight: "100vh",
  };
  const contentStyle = {
    margin: "24px 16px",
    padding: 24,
    background:
      "#fff url('https://cdn.sandersondesigngroup.com/processed-images/products/large/F0808-06.jpg') no-repeat center center",
    backgroundSize: "cover",
    minHeight: "auto",
    width: "calc(100% - 48px)",
    height: "calc(100% - 48px)",
    overflow: "auto",
  };

  const sectionStyle = {
    background: "#fff", // White background for readability
    padding: "20px",
    borderRadius: "8px", // Optional: adds rounded corners for a softer look
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: adds a subtle shadow for depth
    marginBottom: "24px", // Ensure some space between sections
  };

  return (
    <Layout style={layoutStyle}>
      <Layout>
        <Navbar navigate={navigate} />
        <Content style={contentStyle}>
          <div style={sectionStyle}>
            <h2 style={{ marginBottom: "20px", textAlign: "left" }}>
              Browse all stories
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
          </div>
          <div style={sectionStyle}>
            <h2 style={{ marginBottom: "20px", textAlign: "left" }}>
              Folklore
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
          </div>
          <div style={sectionStyle}>
            <h2 style={{ marginBottom: "20px", textAlign: "left" }}>
              Mythology
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
          </div>
          <div style={sectionStyle}>
            <h2 style={{ marginBottom: "20px", textAlign: "left" }}>Hystory</h2>
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
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
