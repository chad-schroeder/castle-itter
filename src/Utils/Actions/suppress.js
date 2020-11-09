import { getUnitStats } from 'Utils/Libs/units';
import checkInspired from 'Utils/Modifiers/inspire';

import store from '../../store';

const { suppression } = store.getState().common;

export const getSuppressionValue = (unitId, locationId, armament = null) => {
    const { suppress, tanker } = getUnitStats(unitId);

    let value = suppress;

    // if tanker unit and tile has increased firepower, use that firepower
    if (tanker && armament) {
        value = armament.suppress;
    }

    // check if unit is inspired
    const inspired = checkInspired(locationId, unitId);
    
    if (inspired) {
        value += 1;
    }
    
    return value;
};

export const actionSuppress = (unitId, los, armament) => {
    const suppressValue = getSuppressionValue(unitId, armament);

    // allow user input to allot suppression
    // for now, auto assign

    // assign suppression
    los.forEach(color => suppression[color] += suppressValue);

    store.dispatch({ type: 'ADD_SUPPRESSION', payload: suppression });
};
