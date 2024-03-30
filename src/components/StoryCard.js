import React, { useState } from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";
import NotLoggedIn from './NotLoggedIn';

const { Meta } = Card;

const StoryCard = ({ title, imageUrl, storyId }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const [showAlert, setShowAlert] = useState(false);

  const handleCardClick = () => {
    if (isAuthenticated) {
      navigate(`/story/${storyId}`);
    } else {
      setShowAlert(true); // Set showAlert to true to display the error message
    }
  };

  return (
    <>
      {showAlert && <NotLoggedIn />}
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
