import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { getFile, getStoryById } from "../api/lib/Story";
import StoryContainer from "../components/StoryContainer";

const Story = () => {
  const [enText, setEnText] = useState("");
  const [chrText, setChrText] = useState("");
  const [phoneticText, setPhoneticText] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(-1);
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

        const phoneticResponse = await getFile(story.content_pheonetic_id);
        if (!phoneticResponse.ok) {
          throw new Error("Failed to fetch Phonetic content");
        }
        const phoneticTextData = await phoneticResponse.text();
        setPhoneticText(phoneticTextData);
      } catch (error) {
        console.error("Error fetching story:", error);
      }
    };

    fetchStory();
  }, [storyId]);

  async function googletextTobSpeech(text) {
    try {
      const apiKey = process.env.REACT_APP_GOOGLE_TEXT_TO_SPEECH_API_KEY;
      if (!apiKey || !text) return;

      const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

      const data = {
        input: {
          text: text,
        },
        voice: {
          languageCode: "fi-FI",
          name: "fi-FI-Standard-A",
          ssmlGender: "FEMALE",
        },
        audioConfig: {
          audioEncoding: "MP3",
        },
      };

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const responseJson = await response.json();

      // Convert base64 to a Blob without using Buffer
      const audioContent = atob(responseJson.audioContent);
      const audioArray = new Uint8Array(audioContent.length);
      for (let i = 0; i < audioContent.length; i++) {
        audioArray[i] = audioContent.charCodeAt(i);
      }
      const audioBlob = new Blob([audioArray], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      return audioUrl;
    } catch (error) {
      console.error("Error converting text to speech:", error);
      throw new Error(error);
    }
  }

  const onPlayClick = () => {
    console.log("Playing audio");
    googletextTobSpeech(phoneticText)
      .then((audioUrl) => {
        console.log("Playing audio:", audioUrl);
        const audio = new Audio(audioUrl);
        audio.play();

        const interval = setInterval(() => {
          const currentTime = audio.currentTime;
          const duration = audio.duration;

          const newIndex = Math.floor(
            (currentTime / duration) * phoneticText.length
          );
          if (newIndex !== highlightIndex) {
            setHighlightIndex(newIndex);
          }
          if (audio.ended) {
            clearInterval(interval);
            setHighlightIndex(-1);
          }
        }, 1000);
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
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
