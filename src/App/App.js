import React from 'react';
import { useSelector } from 'react-redux';

import { Map } from '../Map';
import { Units } from '../Units';

import getAvailableMoves from '../Utils/Libs/getAvailableMoves';

const App = () => {
    // const { loading, playerTurn, suppression } = useSelector(state => state.common);
    const { tiles } = useSelector(state => state.map);

    return (
        <>
            <h1>Castle Itter</h1>
            <h2>Available tiles</h2>
            <ul>
                {getAvailableMoves(tiles).map(tile => (
                    <li key={tile}>{tile}</li>
                ))}
            </ul>
            <Map />
            <Units />
        </>
    );
};

export default App;
