import React from 'react';

export default props => (
    <iframe
        width="100%"
        height="100%"
        src={`${props.src}?autoplay=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
    />
)
