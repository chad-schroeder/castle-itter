import store from '../../store';

export const isPhaseActive = (location) => {
    const { phase } = store.getState().common;

    switch(phase) {
        case 'Deployment':
            if (location === 'C' || location === 'R') return false;
            return true;
        case 'Cellar':
            if (location === 'R') return false;
            return true;
        default:
            return true;
    }
};

export const canTakeAction = ({ ordered, exhausted, disrupted, commanded, casualty }) => {
    if ((ordered || exhausted || disrupted || commanded || casualty)) {
        return false;
    }
    return true;
};

export const canMove = unit => {
    console.log('CanMove', unit);
};

export const canEscape = unit => {
    if (unit.id !== 'borotra') return false; // only borotra can escape
    if (!canTakeAction(unit)) return false; // borotra must be able to take an action

    return true;
};
