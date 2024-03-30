import { Card } from "antd";
import { useNavigate } from "react-router";
import Meta from "antd/es/card/Meta";


const StoryCard = ({ title, image, storyId }) => {
  const navigate = useNavigate();

  console.log('StoryCard:', title, image, storyId);

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img src={image.src} alt={title} />}
      onClick={() => navigate(`/story/${storyId}`)}
    >
      <Meta title={title} />
    </Card>
  );
};

export default StoryCard;
