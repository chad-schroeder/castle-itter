import { rollDice, acquireTarget } from '../Libs/dice';

import store from '../../store';

const { locations, tiles, tracks, targeting } = store.getState().map;

const disruptUnits = (targetList) => {
    const units = tiles
        .filter(tile => targetList.includes(tile.id) && tile.unit)
        .map(tile => tile.unit);
    console.log(units);
};

export const cardSniper = () => {
    const { sniper } = store.getState().units.axis;

    // determine target color
    const rollColor = rollDice();
    const targetColor = targeting.SN[rollColor];

    // get all tiles with target color
    const targetColors = targeting[targetColor];

    // search for a unit to target among possible tiles
    const targetUnit = acquireTarget(targetColors);

    if (targetUnit) {
        // find tile the unit occupies
        const { location: locationId } = tiles.find(tile => tile.unit === targetUnit);

        // get defense value of tile location
        const { defense } = locations.find(location => location.id === locationId);
    
        // roll to hit
        // TODO: UX for rolling dice + sniper result
        const attackValue = sniper.attack;
        const snipershot = rollDice(attackValue);
    
        if (snipershot.some(dice => dice >= defense)) {
            // if any die is equal to or greater than location defense, unit is killed
            console.log('unit eliminated');
        } else {
            console.log('miss!');
        }

        return;
    }
    
    console.log('sniper: no unit found');
};

export const mortar = (trackId) => {
    const { mortar } = store.getState().units.axis;
    console.log('mortar', mortar);

    // acquire target color
    const { los } = tracks[trackId]; 
    // get all matching color tiles
    const targetList = targeting[los];
    console.log('mortar', targetList);

    disruptUnits(targetList);
};

