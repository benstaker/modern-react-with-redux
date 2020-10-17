import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

export default () => {
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div style={{ padding: '10px' }}>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}

            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {!showDropdown ? null : (
                <Dropdown
                    label="Colour"
                    placeholder="Select a colour"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            )} */}

            <Translate />
        </div>
    );
};
