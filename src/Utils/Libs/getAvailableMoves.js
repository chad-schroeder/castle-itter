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

const getAvailableMoves = (tiles) => {
    const available = tiles
        .filter(tile => tile.unit === null)
        .map(tile => tile.id);

    return available;
};

export default getAvailableMoves;
