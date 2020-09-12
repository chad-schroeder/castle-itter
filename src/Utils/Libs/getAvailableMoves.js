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

const getAvailableMoves = () => {
    const tiles = store.getState().map.tiles;

    return tiles
        .filter(tile => tile.unit === null)
        .map(tile => tile.id);

    // TODO: 
    // ensure location defense isn't 0  (Besotten Jenny)
    // when prisoners can move
    // filter for Move and Moving Between Location
};

export default getAvailableMoves;
