import store from '../../store';

export const rollDice = (numOfDice = 1) => {
    const rolls = [];
    for (let i = 0; i < numOfDice; i += 1) {
        rolls[i] = Math.floor(Math.random() * 6) + 1;
    }
    console.log('rollDice', rolls);
    return rolls;
};

export const acquireTarget = (targetList = ['G1', 'G2', 'G3', 'G4', 'G4', 'G4']) => {
    const { tiles } = store.getState().map;

    let target;

    // select random tile from targetList as initial target
    const index = Math.floor(Math.random() * targetList.length);
    console.log('acquireTarget index', index);

    // prepare iterator
    let i = index;

    do { // search through targetList for unit as target
        const { unit } = tiles.find(tile => tile.id === targetList[i]);

        if (unit) {
            // target acquired, exit loop
            target = unit;
            break;
        }

        // loop through entire array from starting index back through again, once
        i = (i + 1) % targetList.length;
    } while (i !== index)

    console.log('aquireTarget target', target);

    return target;
};
