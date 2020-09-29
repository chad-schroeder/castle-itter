import { getRandomIndex, rollDice, acquireTarget } from '../Libs/dice';

import store from '../../store';

const sniper = () => {
    const { locations, tiles, targeting } = store.getState().map;
    const { SN: sniper } = store.getState().units.enemy;

    // determine target color
    const rollForColor = rollDice();
    const targetColor = targeting.SN[rollForColor];

    // get all tiles with target color
    const targetColors = targeting[targetColor];

    // search for a unit to target among possible tiles
    const targetUnit = acquireTarget(targetColors);

    if (targetUnit) {
        // if unit, find tile the unit occupies
        const { location: locationId, id: tileId } = tiles.find(tile => tile.unit === targetUnit);

        // if unit, get defense value of tile location
        const { defense } = locations.find(location => location.id === locationId);
    
        // // roll to hit
        const attackValue = sniper.attack;
        const targetRoll = rollDice(attackValue);
    
        if (targetRoll.some(dice => dice >= defense)) {
            console.log('unit eliminated');
        } else {
            console.log('miss!');
        }

        return;
    }
    
    console.log('sniper: no unit found');
};

export default sniper;
