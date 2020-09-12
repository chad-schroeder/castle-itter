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

const Map = () => {
    const { locations } = useSelector(state => state.map);

    return (
        <div>
            <h2>Map</h2>
            <p>Locations: {locations.length}</p>
        </div>
    );
};

export default Map;
