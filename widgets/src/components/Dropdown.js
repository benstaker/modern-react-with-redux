import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, placeholder, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // Close dropdown when we click away
    useEffect(() => {
        const onBodyClick = (evt) => {
            if (ref.current.contains(evt.target)) return;

            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        return option.value === selected.value ? null : (
            <div
                key={option.value}
                className="item"
                onClick={() => {
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });

    if (selected) {
        placeholder = selected.label;
    }

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    ref={ref}
                    onClick={() => {
                        setOpen(!open);
                    }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{placeholder}</div>
                    <div className={`menu  ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
