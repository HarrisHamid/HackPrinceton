import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFile, getStoryById } from "../api/lib/Story";

const Story = () => {
  const [enText, setEnText] = useState("");
  const [chrText, setChrText] = useState("");

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
  });

  const { storyId } = useParams();
  return (
    <div>
      <h1>English</h1>
      <p>{enText}</p>
      <h1>Cherokee</h1>
      <p>{chrText}</p>
    </div>
  );
};

export default Story;
