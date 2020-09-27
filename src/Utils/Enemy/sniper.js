import { rollDice, acquireTarget } from '../Libs/dice';

import store from '../../store';

const sniper = () => {
    const { locations, tiles, targeting } = store.getState().map;
    const { SN: sniper } = store.getState().units.enemy;

    // get target color
    const rollForColor = rollDice();
    const targetColor = targeting.SN[rollForColor];

    // get target tiles
    const targetColors = targeting[targetColor];
    console.log('targetColors', targetColors);

    // roll for target tile
    const targetUnit = acquireTarget(targetColors);
    const targetTile = 'G2';

    // check if target tile has a unit, otherwise search for next target
    

    // find location id from tile
    const { location: locationId } = tiles.find(tile => tile.id === targetTile);
    console.log('sniper location', locationId);

    // if unit, get defense value of tile location
    const { defense } = locations.find(location => location.id === locationId);
    console.log('sniper defense', defense);

    // roll to hit
    const attackValue = sniper.attack;
    const targetRoll = rollDice(attackValue);
    console.log('dice result', targetRoll);

    if (targetRoll.some(dice => dice >= defense)) {
        console.log('unit eliminated');
    } else {
        console.log('miss!');
    }
};

export default sniper;
