import { getRandomIndex, rollDice, acquireTarget } from '../Libs/dice';

import store from '../../store';

const { tiles, tracks, targeting } = store.getState().map;
const { allies } = store.getState().units;

const disruptUnits = (targetList) => {
    const units = tiles
        .filter(tile => targetList.includes(tile.id) && tile.unit)
        .map(tile => tile.unit);
    console.log(units);
};

const mortar = (trackId) => {
    const { attack } = store.getState().units.axis.MT;

    // acquire target color
    const { los } = tracks[trackId]; 
    // get all matching color tiles
    const targetList = targeting[los];
    console.log('mortar', targetList);

    disruptUnits(targetList);
};

export default mortar;
