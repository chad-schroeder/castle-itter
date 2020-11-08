import { getLocationUnits } from 'Utils/Libs/tiles';
import { eliminateUnits } from 'Utils/Libs/units';

import store from '../../store';

const { allies } = store.getState().units;

// remove eliminated units first and then run check...
const checkMorale = locationId => {
    // get all units at same location
    const units = getLocationUnits(locationId);

    // check if an Officer is within location
    // const officer = allies.some(unit => units.includes(unit.id) && unit?.modifiers?.officer);
    
    // if officer is present, do nothing
    // if (officer) return;

    // save a list of all fled units so we can display to player
    // const fled = allies.map(unit => units.includes(unit.id) && unit?.modifiers?.morale);
    // console.log('fled', fled);

    // remove units
    // eliminateUnits(fled);
};

export default checkMorale;
