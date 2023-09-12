import React from 'react';

const Avatar = ({src, alt}) => {
    return (
        <img src={src} alt={alt} style={{height: '100px', width: '100px', borderRadius: '50%'}}/>
    );
};

export default Avatar;