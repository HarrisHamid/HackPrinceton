import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const StoryCard = ({ title, imageUrl }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={imageUrl} />}
    >
      <Meta title={title} />
    </Card>
  );
};

export default StoryCard;
