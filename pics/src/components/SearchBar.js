import React from 'react';

export default class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    onInputChange = (evt) => {
        this.setState({ term: evt.target.value });
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="search"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
