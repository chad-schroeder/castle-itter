import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Map } from '../Map';
import { Units } from '../Units';

import getAvailableMoves from '../Utils/Libs/getAvailableMoves';
import destroyJennyTiles from '../Utils/Libs/destroyJennyTiles';
import getTargetsByColor from '../Utils/Libs/targetAllied';
import suppress from '../Utils/Libs/suppress';

const App = () => {
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
            <h2>Target Allied tile (by color): Purple</h2>
            <ul>
                {getTargetsByColor('purple').map(target => (
                    <li key={target}>{target}</li>
                ))}
            </ul>
            <p>Supress: {suppress()}</p>
            <Map />
            <Units />
        </>
    );
};

export default App;
