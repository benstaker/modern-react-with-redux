import React from 'react';

import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link className="item" href="/">
                Home
            </Link>

            <Link className="item" href="/accordion">
                Accordion
            </Link>

            <Link className="item" href="/dropdown">
                Dropdown
            </Link>

            <Link className="item" href="/search">
                Search
            </Link>

            <Link className="item" href="/translate">
                Translate
            </Link>
        </div>
    );
};

export default Header;
