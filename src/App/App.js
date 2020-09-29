import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Map } from 'Map';
import { Units } from 'Units';

import getAvailableMoves from 'Utils/Libs/getAvailableMoves';
// import getTargetsByColor from 'Utils/Libs/targetAllied';
// import suppress from 'Utils/Actions/suppress';
// import inspire from 'Utils/Modifiers/inspire';
// import morale from 'Utils/Modifiers/morale';
// import sacrifice from 'Utils/Modifiers/sacrifice';
import advance from 'Utils/Enemy/advance';
import { playCard, buildDeck } from 'Utils/Libs/buildDeck';
import changeTurn from 'Utils/Libs/changeTurn';
import sniper from 'Utils/Enemy/sniper';
import { eliminateUnit } from 'Utils/Libs/eliminateUnit.js';

const App = () => {
    const { tiles } = useSelector(state => state.map);

    useEffect(() => {
        buildDeck();

        // const soldier = {
        //     id: 456,
        //     type: 'rifleman',
        //     defense: 3,
        // };
        
        // advance(2, soldier);

        // sniper(4);

        eliminateUnit('basse');
    }, []);
    
    // const inspired = inspire('NT5');
    // const fled = morale('NT5');
    // const sacrificed = sacrifice('NT5');
    
    return (
        <>
            <h1>Castle Itter</h1>
            <button onClick={changeTurn}>
                Change Turn
            </button>
            <button onClick={playCard}>
                Play Card
            </button>
            <Map />
            <Units />
        </>
    );
};

export default App;
