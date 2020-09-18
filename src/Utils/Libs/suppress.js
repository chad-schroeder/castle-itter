import { getLineOfSight } from './targeting';

import store from '../../store';

const getSuppressionValue = (unitId = 'pollack') => {
    const allied = store.getState().units.allied.combatants;
    const value = allied.find(person => person.id === unitId).suppress;
    // TODO: add modifiers
    return value;
};

const suppress = (unitId = 'pollack') => {
    const suppression = store.getState().common.suppression;
    console.log('suppression', suppression);

    // TODO: ensure a unit has los before coming to this function

    // get line of sight
    const los = getLineOfSight('NT5');
    // console.log('getLineOfSight', los);

    // get unit suppression value
    const suppressValue = getSuppressionValue();
    // console.log('getSupressionValue', suppressValue);

    // allow user input to allot suppression
    // for now, auto assign

    // assign suppression
    los.forEach(color => {
        suppression[color] = suppression[color] + suppressValue;
    });

    console.log('dispatch', suppression);
    
    store.dispatch({
        type: 'ADD_SUPPRESSION',
        payload: suppression,
    });

    return los;
};

export default suppress;
