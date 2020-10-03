import { rollDice, acquireTarget } from '../Libs/dice';

import store from '../../store';

const { locations, tiles, tracks, targets } = store.getState().map;

const disruptUnits = (targetList) => {
    const units = tiles
        .filter(tile => targetList.includes(tile.id) && tile.unit)
        .map(tile => tile.unit);
    console.log(units);
};

const getTargetColor = (id) => {
    const roll = rollDice();
    const color = targets[id][roll];
    return color;
};

const getTargetTiles = (color) => {
    return targets[color];
};

const getTargetByColor = (id) => {
    const color = getTargetColor(id);
    const tiles = getTargetTiles(color);
    const unit = acquireTarget(tiles);
    return unit;
};

const getLocationByUnit = (unit) => {
    const { location } = tiles.find(tile => tile.unit === unit);
    return location;
};

const getLocationValue = (id) => {
    const { defense } = locations.find(location => location.id === id);
    return defense;
};

export const cardSniper = () => {
    const { sniper: { id, attack }} = store.getState().units.axis;

    // acquire target
    const unit = getTargetByColor(id);

    if (unit) {
        // get unit tile
        const locationId = getLocationByUnit(unit);

        // get defense value of tile location
        const defense = getLocationValue(locationId);
    
        // roll to hit
        const roll = rollDice(attack);
    
        if (roll.some(dice => dice >= defense)) {
            // if any die is equal to or greater than location defense, unit is killed
            console.log('unit eliminated');
        } else {
            console.log('miss!');
        }

        return;
    }
    
    console.log('sniper: no unit found');
};

export const cardMortar = (trackId) => {
    const { mortar } = store.getState().units.axis;
    console.log('mortar', mortar);

    // acquire target color
    const { los } = tracks[trackId];

    // get all matching color tiles
    const targetList = targets[los];
    console.log('mortar', targetList);

    disruptUnits(targetList);
};

