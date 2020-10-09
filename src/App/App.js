import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Map } from 'Map';
import { Units } from 'Units';

import { buildDeck } from 'Utils/Libs/deck';
import playCard from 'Utils/Libs/playCard';
import { spendAction } from 'Utils/Libs/turn';
import { getFinalScore } from 'Utils/Libs/scoring';
import escape from 'Utils/Libs/escape';
import destroyBesottenJenny from 'Utils/Libs/destroyBesottenJenny';
// import { cardSniper, cardDisrupt, cardPanzerfaust, cardSuppressiveFire } from 'Utils/Enemy/disruption';

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
            <button onClick={destroyBesottenJenny} disabled={gameOver}>
                Destroy Besotten Jenny
            </button>
            <button onClick={getFinalScore}>
                End Game
            </button>
            <p>Game Over: {gameOver ? 'true' : 'false'}</p>
            <button onClick={() => escape('G2')}>
                Escape
            </button>
            <Map />
            <Units />
        </>
    );
};

export default App;
