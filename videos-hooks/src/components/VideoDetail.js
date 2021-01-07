import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id}`} title="video player" />
            </div>

            <div className="ui segment">
                <h4 className="ui header">{video.title}</h4>
                <p className="ui description">{video.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
