import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Map } from 'Map';
import { Units } from 'Units';

import buildDeck from 'Utils/Libs/buildDeck';
import playCard from 'Utils/Libs/playCard';
import { spendAction } from 'Utils/Libs/turn';
import getScore from 'Utils/Libs/getScore';
import { cardSniper, cardDisrupt, cardPanzerfaust, cardSuppressiveFire } from 'Utils/Enemy/disruption';

const App = () => {
    const { gameOver } = useSelector(state => state.common);

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
            <button onClick={playCard} disabled={gameOver}>
                Play Card
            </button>
            <button onClick={spendAction} disabled={gameOver}>
                Spend Action
            </button>
            <button onClick={getScore}>
                End Game
            </button>
            <p>Game Over: {gameOver ? 'true' : 'false'}</p>
            <Map />
            <Units />
        </>
    );
};

export default App;
