import React from 'react';
import { useParams } from 'react-router-dom';

const Story = () => {
    const { storyId } = useParams();
    console.log(storyId);
    return (
        <div>
            <h1>Story</h1>
        </div>
    );
}

export default Story;