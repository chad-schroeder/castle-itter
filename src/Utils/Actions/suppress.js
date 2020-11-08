import store from '../../store';

const { suppression } = store.getState().common;
const { allies } = store.getState().units;

export const canSuppress = unitId => {
    const unit = allies[unitId];
    if (unit.exhausted || unit.tokens.length) return false;
    return true;
};

const getSuppressionValue = (unitId, armament = null) => {
    const { suppress, tanker } = allies[unitId];

    // if tanker unit and tile has increased firepower, use that firepower
    if (tanker && armament) {
        return armament.suppress;
    }
    
    return suppress;
};

export const actionSuppress = (unitId, los, armament) => {
    const suppressValue = getSuppressionValue(unitId, armament);

    // allow user input to allot suppression
    // for now, auto assign

    // assign suppression
    los.forEach(color => suppression[color] += suppressValue);

    store.dispatch({ type: 'ADD_SUPPRESSION', payload: suppression });
};
