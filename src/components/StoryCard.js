import { Card } from "antd";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import Meta from "antd/es/card/Meta";

const StoryCard = ({ title, image, storyId }) => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  const handleCardClick = () => {
    if (isAuthenticated) {
      navigate(`/story/${storyId}`);
    } else {
      alert("Require login to view story")
    }
  };

  const defaultImageSrc = "https://via.placeholder.com/240"

  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={image?.src || defaultImageSrc} />}
        onClick={handleCardClick}
      >
        <Meta
          title={<h2 style={{ fontSize: "20px" }}>{title}</h2>}
        />
      </Card>
    </>
  );
};

export default StoryCard;
