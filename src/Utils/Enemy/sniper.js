import { getRandomIndex, rollDice, acquireTarget } from '../Libs/dice';

import store from '../../store';

const sniper = () => {
    const { locations, tiles, targeting } = store.getState().map;
    const { SN: sniper } = store.getState().units.axis;

    // determine target color
    const rollColor = rollDice();
    const targetColor = targeting.SN[rollColor];

    // get all tiles with target color
    const targetColors = targeting[targetColor];

    // search for a unit to target among possible tiles
    const targetUnit = acquireTarget(targetColors);

    if (targetUnit) {
        // find tile the unit occupies
        const { location: locationId, id: tileId } = tiles.find(tile => tile.unit === targetUnit);

        // get defense value of tile location
        const { defense } = locations.find(location => location.id === locationId);
    
        // roll to hit
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

export default sniper;
