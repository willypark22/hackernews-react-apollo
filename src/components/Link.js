import React from 'react';

// Simple component that expects a link in its prop
// and renders the link's description and url
const Link = (props) => {
    const { link } = props;

    return (
        <div>
            <div>
                {link.description} ({link.url})
            </div>
        </div>
    );
};

export default Link;
