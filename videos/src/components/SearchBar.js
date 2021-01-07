import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit();
    };

    onTermChange = (e) => {
        this.props.onTermChange(e.target.value);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={this.onTermChange} value={this.props.term} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
