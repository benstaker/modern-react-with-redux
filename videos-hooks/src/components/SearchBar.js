import './SearchBar.css';
import React from 'react';

const SearchBar = ({ onFormSubmit, onTermChange, term }) => {
    const formSubmit = (e) => {
        e.preventDefault();

        onFormSubmit();
    };

    const termChange = (e) => {
        onTermChange(e.target.value);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={formSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" onChange={termChange} value={term} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
