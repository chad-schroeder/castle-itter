import { rollDice, acquireTarget, rollToHit } from '../Libs/dice';

import store from '../../store';

const { locations, tiles, tracks, axisLOS } = store.getState().map;

const disruptUnits = (targetList) => {
    const units = tiles
        .filter(tile => targetList.includes(tile.id) && tile.unit)
        .map(tile => tile.unit);
    console.log(units);
};

const getTargetColor = (id) => {
    const roll = rollDice();
    const color = axisLOS[id][roll];
    return color;
};

const getTargetTiles = (color) => {
    return axisLOS[color];
};

const getTargetByColor = (axisId) => {
    const color = getTargetColor(axisId);
    const tiles = getTargetTiles(color);
    const target = acquireTarget(tiles);
    return target;
};

const getLocationByUnit = (unitId) => {
    const { location } = tiles.find(tile => tile.unit === unitId);
    return location;
};

const getLocationDefense = (locationId) => {
    const { defense } = locations.find(location => location.id === locationId);
    return defense;
};

export const cardSniper = () => {
    const { sniper: { id, attack } } = store.getState().units.axis;
    console.log('Card: Sniper!');

    const unit = getTargetByColor(id);

    if (unit) {
        console.log(`${unit} has been targeted!`);

        const locationId = getLocationByUnit(unit);
        const defense = getLocationDefense(locationId);
        const casualty = rollToHit(attack, defense);
        
        if (casualty) {
            console.log(`Shot hit! ${unit} has been KIA`);
        } else {
            console.log('Shot missed!');
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
    const targetList = axisLOS[los];
    console.log('mortar', targetList);

    disruptUnits(targetList);
};

