import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Map } from '../Map';
import { Units } from '../Units';


const App = () => {
    const { loading, playerTurn, suppression } = useSelector(state => state.common);

    return (
        <>
            <h1>Castle Itter</h1>
            <h2>Stats</h2>
            <p>Player turn: {playerTurn ? 'True' : 'False'}</p>
            <p>Suppression tokens:</p>
            <ul>
                {Object.keys(suppression).map((key, i) => (
                    <li key={key}>{key[0].toUpperCase() + key.slice(1)}: {suppression[key]}</li>
                ))}
            </ul>
            <Map />
            <Units />
        </>
    );
};

export default App;
