import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';

import { Map } from 'Map';
import { Units } from 'Units';

import { playCard, buildDeck } from 'Utils/Libs/buildDeck';
import changeTurn from 'Utils/Libs/changeTurn';
import spendAction from 'Utils/Libs/spendAction';
import { cardSniper, cardDisrupt, cardPanzerfaust, cardSuppressiveFire } from 'Utils/Enemy/disruption';

const App = () => {
    useEffect(() => {
        buildDeck();

        // const soldier = {
        //     id: 456,
        //     type: 'rifleman',
        //     defense: 3,
        // };
        
        // advance(2, soldier);

        // cardSniper(4);

        // eliminateUnit('basse');
        // cardDisrupt('machineGun', 2);

        // cardPanzerfaust();

        // cardSuppressiveFire();
    }, []);
    
    return (
        <>
            <h1>Castle Itter</h1>
            <button onClick={changeTurn}>
                Change Turn
            </button>
            <button onClick={playCard}>
                Play Card
            </button>
            <button onClick={spendAction}>
                Spend Action
            </button>
            <Map />
            <Units />
        </>
    );
};

export default App;
