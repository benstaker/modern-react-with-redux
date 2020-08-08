import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = React.createRef();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            });

            if (term) {
                setResults(data.query.search);
            }
        };

        fetchData();
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="content">
                    <div className="header">{result.title}</div>
                    {result.snippet}
                </div>
            </div>
        );
    });

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
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
