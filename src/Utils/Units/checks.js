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

export const canEscape = unit => {
    if (unit.id !== 'borotra') return false; // only borotra can escape
    if (!canTakeAction(unit)) return false; // borotra must be able to take an action

    return true;
};
