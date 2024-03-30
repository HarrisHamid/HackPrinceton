import { Card } from 'antd';
import { useNavigate } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";

const { Meta } = Card;

const StoryCard = ({ title, imageUrl, storyId }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const handleCardClick = () => {
    if (isAuthenticated) {
      navigate(`/story/${storyId}`);
    } else {
      alert("Rquire login to view story")
    }
  };

  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={imageUrl} />}
        onClick={handleCardClick}
      >
        <Meta title={title} />
      </Card>
    </>
  );
};

export default StoryCard;
