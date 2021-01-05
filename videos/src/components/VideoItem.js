import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div>
            <img src={video.image.url} height={video.image.height} width={video.image.width} />
            <h1>{video.title}</h1>
            <h2>{video.id}</h2>
            <p>{video.description}</p>
        </div>
    );
};

export default VideoItem;
