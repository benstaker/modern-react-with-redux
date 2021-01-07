import './VideoItem.css';
import React from 'react';

const VideoItem = ({ onVideoSelect, video }) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img alt={video.title} src={video.image.url} className="ui image" />
            <div className="content">
                <div className="header">{video.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
