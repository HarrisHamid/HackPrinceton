import React, { useState } from 'react';
import { Card, Typography, Row, Col, Modal } from 'antd';
const { Title, Paragraph } = Typography;

const getTranslation = (text) => {
    return `Translated version of "${text}"`;
};

const StoryContainer = ({ language, text }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [translatedText, setTranslatedText] = useState('');

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
        <Row justify="center" style={{ margin: '20px' }}>
            <Col span={12}>
                <Card bordered={false}>
                    <Title level={1}>{language}</Title>
                    <Paragraph onMouseUp={handleTextSelection}>
                        {text}
                    </Paragraph>
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
