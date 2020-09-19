import React from 'react';
import { useSelector } from 'react-redux';

import { Map } from '../Map';
import { Units } from '../Units';

import getAvailableMoves from '../Utils/Libs/getAvailableMoves';
import getTargetsByColor from '../Utils/Libs/targetAllied';
import suppress from '../Utils/Libs/Actions/suppress';
import inspire from '../Utils/Libs/Modifiers/inspire';
import morale from '../Utils/Libs/Modifiers/morale';

const App = () => {
    const { tiles } = useSelector(state => state.map);

    const inspired = inspire('NT5');
    const fled = morale('NT5');

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
            <p>Inspired: {inspired ? 'true' : 'false'}</p>
            <p>Morale: {fled ? 'true' : 'false'}</p>
            <ul>
                {/* {morale('NT5').map(unit => (
                    <li key={unit}>{unit}</li>
                ))} */}
            </ul>
            <Map />
            <Units />
        </>
    );
};

export default App;
