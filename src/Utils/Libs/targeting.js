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

const targetByColor = (color) => {
    const colors = store.getState().map.colors;
    return colors[color];
};

export default targetByColor;