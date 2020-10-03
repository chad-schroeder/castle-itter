import store from '../../store';

export const getRandomIndex = (list = []) => {
    const index = Math.floor(Math.random() * list.length);
    return index;
};

export const rollDice = (numOfDice = 1) => {
    const rolls = [];
    for (let i = 0; i < numOfDice; i += 1) {
        rolls[i] = Math.floor(Math.random() * 6) + 1;
    }
    return rolls;
};

const getUnit = (targetList, index) => {
    const { tiles } = store.getState().map;
    const { unit } = tiles.find(tile => tile.id === targetList[index]);
    return unit;
};

export const acquireTarget = (targetList = ['G1', 'G2', 'G3', 'G4', 'G4', 'G4']) => {    
    let target;

    // select random tile from targetList as initial target
    const initialIndex = getRandomIndex(targetList);

    let i = initialIndex;
    do { // proceed through targetList for unit to target
        const unit = getUnit(targetList, i);

        if (unit) {
            // target acquired, exit loop
            target = unit;
            break;
        }

        // loop through entire array from starting index back through again, once
        i = (i + 1) % targetList.length;
    } while (i !== initialIndex)

    return target;
};

export const rollToHit = (attack = 0, defense = 6) => {
    const roll = rollDice(attack);
    let result;
    
    if (roll.some(dice => dice >= defense)) {
        // if any die is equal to or greater than location defense, unit is killed
        result = 'unit eliminated!';
    } else {
        result = 'miss!';
    }

    return result;
};
