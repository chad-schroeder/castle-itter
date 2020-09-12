/*
 * CASTLE ITTER
 *
 * License: MIT
 *
 * A non-commercial port of the solo boardgame "Castle Itter":
 * https://boardgamegeek.com/boardgame/196257/castle-itter
 * 
 * Designer: David Thompson
 * Artist: David Thompson, Matt W White
 * Publisher: Dan Verssen Games (DVG)
 */

import React from 'react';
import { useSelector } from 'react-redux';

import { Map } from '../Map';
import { Units } from '../Units';

import getAvailableMoves from '../Utils/Libs/getAvailableMoves';
import targetByColor from '../Utils/Libs/targeting';

const App = () => {
    const { tiles, colors } = useSelector(state => state.map);

    return (
        <>
            <h1>Castle Itter</h1>
            <h2>Available tiles</h2>
            <ul>
                {getAvailableMoves(tiles).map(tile => (
                    <li key={tile}>{tile}</li>
                ))}
            </ul>
            <h2>Target by color: Purple</h2>
            <ul>
                {targetByColor('purple').map(target => (
                    <li key={target}>{target}</li>
                ))}
            </ul>
            <Map />
            <Units />
        </>
    );
};

export default App;
