import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Map } from 'Map';
import { Units } from 'Units';

import getAvailableMoves from 'Utils/Libs/getAvailableMoves';
import getTargetsByColor from 'Utils/Libs/targetAllied';
import suppress from 'Utils/Actions/suppress';
// import inspire from 'Utils/Modifiers/inspire';
// import morale from 'Utils/Modifiers/morale';
// import sacrifice from 'Utils/Modifiers/sacrifice';
import advance from 'Utils/Enemy/advance';
import buildDeck from 'Utils/Libs/buildDeck';

const App = () => {
    const { tiles } = useSelector(state => state.map);

    useEffect(() => {
        const soldier = {
            id: 456,
            type: 'rifleman',
            defense: 3,
        };
        
        advance(2, soldier);

        buildDeck();
    }, []);
    
    // const inspired = inspire('NT5');
    // const fled = morale('NT5');
    // const sacrificed = sacrifice('NT5');
    
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
            {/* <p>Inspired: {inspired ? 'true' : 'false'}</p>
            <p>Low Morale: {fled ? 'true' : 'false'}</p>
            <p>Sacrificed: {sacrificed ? 'true' : 'false'}</p> */}
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
