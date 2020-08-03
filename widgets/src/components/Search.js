import React, { useState } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');
    const inputRef = React.createRef();

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(evt) => setTerm(evt.target.value)}
                        ref={inputRef}
                        className="input"
                    />
                </div>
            </div>
            <div>List</div>
        </div>
    );
};

export default Search;
