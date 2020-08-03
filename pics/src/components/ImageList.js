import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

export default (props) => {
    const images = props.images.map((image) => (
        <ImageCard image={image} key={image.id} />
    ));

    return <div className="image-list">{images}</div>;
};
