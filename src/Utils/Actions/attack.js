import checkInspired from 'Utils/Modifiers/inspire';

export const getAttackValue = (unit, locationId, armamentValue = 0) => {
    const { id, attack, tanker } = unit;
    let value = attack;

    // if tanker unit and tile has increased firepower, use that firepower
    if (tanker && armamentValue) {
        value = armamentValue;
    }

    // check if unit is inspired
    const inspired = checkInspired(locationId, id);
    
    if (inspired) {
        value += 1;
    }
    
    return value;
};
