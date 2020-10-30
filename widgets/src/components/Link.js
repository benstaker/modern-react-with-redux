import React from 'react';

const Link = ({ children, className, href }) => {
    const onClick = (evt) => {
        // Allow command / ctrl key clicks
        if (evt.metaKey || evt.ctrlKey) {
            return;
        }

        evt.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;
