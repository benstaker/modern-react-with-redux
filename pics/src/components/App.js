import React from 'react';

import SearchBar from './SearchBar';

export default class App extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar />
            </div>
        );
    }
};