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

import store from '../../store';

const destroyBesottenJenny = () => {
    const tiles = store.getState().map.tiles;

    const destroyed = tiles.map(tile => {
        if (tile.location === 'BJ') {
            return {
                ...tile,
                destroyed: true,
            };
        }
        return tile;
    });

    return destroyed;
};

export default destroyBesottenJenny;
