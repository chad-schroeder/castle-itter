import { getLineOfSight } from '../Libs/targeting';

import store from '../../store';

const getSuppressionValue = (unitId) => {
    const friendlies = store.getState().units.friendly.units;
    const value = friendlies.find(person => person.id === unitId).suppress;
    // TODO: add modifiers
    return value;
};

const suppress = (unitId, tileId) => {
    const suppression = store.getState().common.suppression;

    // TODO: ensure a unit has los before coming to this function

    // get line of sight
    const los = getLineOfSight(tileId);
    // console.log('getLineOfSight', los);

    // get unit suppression value
    const suppressValue = getSuppressionValue(unitId);

    // allow user input to allot suppression
    // for now, auto assign

    // assign suppression
    los.forEach(color => suppression[color] += suppressValue);

    store.dispatch({ type: 'ADD_SUPPRESSION', payload: suppression });

    return los;
};

export default suppress;
