import store from '../../store';

export const isPhaseActivated = (unit) => {
    const { phase } = store.getState().common;
    let message = '';

    if (phase === 'Deployment' && unit.location !== 'D') {
        message = 'Only deployment units may be activated at this time';
    }

    if (phase === 'Cellar' && unit.location === 'R') {
        message = 'Replacement units may not deploy until the Replacements card is revealed';
    }
    
    const placeable = message ? false : true;
    
    return {
        placeable,
        message,
    }
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
