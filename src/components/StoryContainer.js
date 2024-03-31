import React, { useEffect, useState } from "react";
import { Card, Typography, Row, Col, Modal } from "antd";
import Papa from "papaparse";

const { Title, Paragraph } = Typography;

const dictFilePath = `../static/vocab/dict.csv`;

const StoryContainer = ({ language, text }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [translationLookup, setTranslationLookup] = useState({});

  useEffect(() => {
    fetch(dictFilePath)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const lookup = {};
            results.data.forEach((row) => {
              if (row === undefined) {
                return;
              }
              if (language === "Cherokee" && !row.Cherokee) {
                return;
              }
              if (language === "English" && !row.English) {
                return;
              }
              lookup[row.English.toLowerCase()] =
                language === "Cherokee" ? row.Cherokee : row.Phonetic;
            });
            setTranslationLookup(lookup);
          },
        });
      });
  });

  const getTranslation = (text) => {
    const translation =
      translationLookup[text.toLowerCase()] || "Translation not found";
    return translation;
  };

  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      const translation = getTranslation(selectedText);
      setTranslatedText(translation);
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Row justify="center" style={{ margin: "20px" }}>
      <Col span={12}>
        <Card bordered={false}>
          <Title level={1}>{language}</Title>
          <Paragraph onMouseUp={handleTextSelection}>{text}</Paragraph>
        </Card>
        <Modal
          title="Translation"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{translatedText}</p>
        </Modal>
      </Col>
    </Row>
  );
};

export default StoryContainer;
