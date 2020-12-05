import store from '../../store';

import { getLocationUnits } from 'Utils/Libs/units';

const { allies } = store.getState().units;

export const checkCommand = (locationId, commanderId) => {
    // get all units at location, excluding commander
    const locationUnits = getLocationUnits(locationId, commanderId);

    // get all units that can be commanded
    const validUnits = [];

    Object.keys(allies).forEach(unit => {
        if (
            locationUnits.includes(unit.id) && 
            !unit.tokens.commanded && 
            !unit.tokens.ordered && 
            (unit.exhausted || unit.tokens.disrupted)
        ) {
                validUnits.push(unit.id);
        }
    });

    if (validUnits.length) {
        return true;
    }

    return false;
};
