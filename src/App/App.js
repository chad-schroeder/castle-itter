import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Map } from '../Map';
import { Units } from '../Units';

import getAvailableMoves from '../Utils/Libs/getAvailableMoves';
import getTargetsByColor from '../Utils/Libs/targetAllied';
import suppress from '../Utils/Libs/suppress';
import { inspire, modifiers } from '../Utils/Libs/modifiers';

const App = () => {
    const { tiles } = useSelector(state => state.map);

    const inspired = inspire('NT5');

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
            <h3>Supress</h3>
            <ul>
                {suppress('basse', 'NT5').map(color => (
                    <li key={color}>{color}</li>
                ))}
            </ul>
            <p>Inspire: {inspired ? 'true' : 'false'}</p>
            <Map />
            <Units />
        </>
    );
};

export default App;
