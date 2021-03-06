import { rollDice, acquireTarget, rollToHit } from '../Libs/dice';

import store from '../../store';

const { locations, tiles, tracks, axisLOS } = store.getState().map;

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
    console.log('Card: Sniper');

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

export const cardDisrupt = (axisId, trackId) => {
    const { attack } = store.getState().units.axis[axisId];
    console.log(`Card: ${axisId}`, attack);

    // acquire target color
    const { los } = tracks[trackId];

    // get all matching color tiles
    const targetList = axisLOS[los];
    console.log(targetList);

    const units = tiles
        .filter(tile => targetList.includes(tile.id) && tile.unit)
        .map(tile => tile.unit);

    units.forEach(unit => {
        const locationId = getLocationByUnit(unit);
        const defense = getLocationDefense(locationId);
        const casualty = rollToHit(attack, defense);

        if (casualty) {
            console.log(`${axisId} hit! ${unit} has been disrupted`);
        } else {
            console.log(`${axisId} shot on ${unit} missed!`);
        }
    });
};

export const cardSuppressiveFire = () => {
    // only tracks 2 through 12 can have suppressive fire units
    for (let i = 2; i <= 12; i += 1) {
        const { los, suppress } = tracks[i];

        if (suppress.length) {
            console.log('suppress:', suppress);
            
            suppress.forEach(unit => {
                const { attack } = store.getState().units.axis[unit];
                const colors = getTargetTiles(los);

                // get all matching color tiles
                const targetList = axisLOS[los];
                console.log('targetList', targetList);

                const units = tiles
                    .filter(tile => targetList.includes(tile.id) && tile.unit)
                    .map(tile => tile.unit);

                units.forEach(unit => {
                    const locationId = getLocationByUnit(unit);
                    const defense = getLocationDefense(locationId);
                    const casualty = rollToHit(attack, defense);

                    if (casualty) {
                        console.log(`${unit} hit! ${unit} has been disrupted`);
                    } else {
                        console.log(`${unit} shot on ${unit} missed!`);
                    }
                });
            });
        }
    }
};

export const cardPanzerfaust = () => {
    const { attack } = store.getState().units.axis.panzerfaust;
    const defense = getLocationDefense('BJ'); // target is always the Besotten Jenny

    const hit = rollToHit(attack, defense);
    
    if (hit) {
        console.log('panzerfaust hit!');

        const units = tiles
            .filter(tile => tile.location === 'BJ' && tile.unit)
            .map(tile => tile.unit);
        console.log('units', units);
    } else {
        console.log('panzerfaust missed!');
    }
};
