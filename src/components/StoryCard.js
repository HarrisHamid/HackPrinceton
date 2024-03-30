import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router';

const { Meta } = Card;

const StoryCard = ({ title, imageUrl, storyId }) => {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={imageUrl} />}
      onClick={() => navigate(`/story/${storyId}`)}
    >
      <Meta title={title} />
    </Card>
  );
};

export default StoryCard;
