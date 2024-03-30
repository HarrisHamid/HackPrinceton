import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
const { Title, Paragraph } = Typography;

const StoryContainer = ({ language, text }) => {
    return (
        <Row justify="center" style={{ margin: '20px' }}>
            <Col span={12}>
                <Card bordered={false}>
                    <Title level={1}>{language}</Title>
                    <Paragraph>{text}</Paragraph>
                </Card>
            </Col>
        </Row>
    );
};

export default StoryContainer;
