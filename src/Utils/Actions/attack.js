import checkInspired from 'Utils/Modifiers/inspire';

import store from '../../store';

const { allies } = store.getState().units;

const getAttackValue = (unitId, locationId, armament = null) => {
    const { attack, tanker } = allies[unitId];

    let value = attack;

    // if tanker unit and tile has increased firepower, use that firepower
    if (tanker && armament) {
        value = armament.attack;
    }

    // check if unit is inspired
    const inspired = checkInspired(locationId, unitId);
    
    if (inspired) {
        value += 1;
    }
    
    return value;
};

export const actionAttack = (unitId, los, armament) => {
    const attackValue = getAttackValue(unitId, armament);

    // TODO: highlight all enemy tracks within line of sight
};
