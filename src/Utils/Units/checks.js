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

export const canTakeAction = ({ ordered, exhausted, disrupted, commanded, casualty, activated }) => {
    const { phase } = store.getState().common;

    if ((ordered || exhausted || disrupted || commanded || casualty || !activated)) {
        return false;
    }
    
    // Deployed units cannot activate again until all deployment pool units have been placed
    if (phase === 'Deployment' && activated) {
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
