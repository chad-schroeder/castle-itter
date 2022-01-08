import store from '../../store';

export const canPhaseActivate = (unit) => {
    const phase = store.getState().common;

    if (phase === 'Deployment') {
        if (unit.location !== 'D') return false;
        return true;
    }

    if (phase === 'Cellar') {
        if (unit.location === 'R') return false;
        return true;
    }

    return true;
};

export const canTakeAction = ({ ordered, exhausted, disrupted, commanded, casualty }) => {
    if ((ordered || exhausted || disrupted || commanded || casualty)) {
        return false;
    }
    return true;
};

export const canMove = unit => {
    console.log('can move');
    // return canTakeAction(unit);
};

export const canEscape = unit => {
    if (unit.id !== 'borotra') return false; // only borotra can escape
    if (!canTakeAction(unit)) return false; // borotra must be able to take an action

    return true;
};
