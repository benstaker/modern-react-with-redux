// Import the React and React DOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const style = { backgroundColor: 'blue', color: 'white' };
    const buttonText = 'Click me';
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));