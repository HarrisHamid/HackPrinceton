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

        const phoneticResponse = await getFile(story.content_phonetic_id);
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
          languageCode: "en-gb",
          name: "en-GB-Standard-A",
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
      const audioBlob = new Blob(
        [Buffer.from(responseJson.audioContent, "base64")],
        { type: "audio/mpeg" }
      );
      const audioUrl = URL.createObjectURL(audioBlob);
      return audioUrl;
    } catch (error) {
      throw new Error(error);
    }
  }

  const onPlayClick = () => {
    googletextTobSpeech(phoneticText)
      .then((audioUrl) => {
        const audio = new Audio(audioUrl);
        audio.play();
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
