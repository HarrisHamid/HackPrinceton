import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { getFile, getStoryById } from "../api/lib/Story";
import StoryContainer from "../components/StoryContainer";

const Story = () => {
  const [enText, setEnText] = useState("");
  const [chrText, setChrText] = useState("");
  const { storyId } = useParams();

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await getStoryById(storyId);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const story = await response.json();

        // Fetch the English text
        const enResponse = await getFile(story.content_en_id);
        if (!enResponse.ok) {
          throw new Error("Failed to fetch English content");
        }
        const enTextData = await enResponse.text();
        setEnText(enTextData);

        // Fetch the Cherokee text
        const chrResponse = await getFile(story.content_chr_id);
        if (!chrResponse.ok) {
          throw new Error("Failed to fetch Cherokee content");
        }
        const chrTextData = await chrResponse.text();
        setChrText(chrTextData);
      } catch (error) {
        console.error("Error fetching story:", error);
      }
    };

    fetchStory();
  }, [storyId]);

  const onPlayClick = () => {
    console.log("Play button clicked");
  };

  return (
    <div className="story-container">
      <StoryContainer language="Cherokee" text={chrText} />
      <StoryContainer language="English" text={enText} />
      <Button
        type="primary"
        shape="circle"
        icon={<PlayCircleOutlined />}
        size="large"
        onClick={onPlayClick}
        style={{ position: "absolute", right: "20px", bottom: "20px" }}
      />
    </div>
  );
};

export default Story;
