import React from 'react';

export default (props) => {
    const images = props.images.map(({ description, id, urls }) => (
        <img
            className="ui medium bordered image"
            src={urls.regular}
            alt={description}
            key={id}
        />
    ));

    return <div className="ui segment">{images}</div>;
};
