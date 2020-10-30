import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

const options = [
    {
        label: 'The colour red',
        value: 'red'
    },
    {
        label: 'The colour green',
        value: 'green'
    },
    {
        label: 'Shade of blue',
        value: 'blue'
    }
];

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library amoungst engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div style={{ padding: '10px' }}>
            <Header />

            <hr />

            <Route path="/">
                <h1>Home</h1>
            </Route>

            <Route path="/accordion">
                <Accordion items={items} />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Colour"
                    placeholder="Select a colour"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};
