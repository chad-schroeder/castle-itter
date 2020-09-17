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

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Map } from '../Map';
import { Units } from '../Units';

import getAvailableMoves from '../Utils/Libs/getAvailableMoves';
import destroyBesottenJenny from '../Utils/Libs/destroyBesottenJenny';
import getTargetsByColor from '../Utils/Libs/targetAllied';

const App = () => {
    const { tiles } = useSelector(state => state.map);

    const dispatch = useDispatch();

    useEffect(() => {
        const destroyed = destroyBesottenJenny();
        dispatch({ type: 'DESTROY_BESOTTEN_JENNY', payload: destroyed });
    }, []);

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
            <Map />
            <Units />
        </>
    );
};

export default App;
