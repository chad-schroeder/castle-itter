import store from '../../store';

export const canTakeAction = unit => {
    const { ordered, commanded, casualty, locked, deployed } = unit;

    if ((ordered || commanded || casualty || locked || deployed)) {
        return false;
    }

    return true;
};

export const canMove = unit => {

};

export const isEscapeLocation = location => {
    if (location === 'C' || location === 'GH') return false;
    return true;
};

export const hasEscapeRoute = los => {
    // check each los track for enemy counters
    return false;
};

export const canEscape = unit => {
    const { id, los, location } = unit;

    if (id !== 'borotra') return false; // only Borotra can escape
    if (!isEscapeLocation(location)) return false; // only certain locations are valid escape routes
    if (!hasEscapeRoute(los)) // Borotra's path cannot be blocked by enemy counters
    if (!canTakeAction(unit)) return false; // Borotra must be able to take an action

    return true;
};


export const isInspired = unit => {
    const { defenders } = store.getState().units;
    const { id, location } = unit;

    const inspireUnits = defenders.some(defender => 
        defender.inspire // is an inspire unit
        && defender.location === location // inspire unit must be in the same location
        && !defender.disrupted // units cannot inspire if disrupted
        && defender.id !== id // unit cannot inspire itself
    );

    return inspireUnits;
};
