import store from '../../store';

export const canTakeAction = unit => {
    const { phase, playerTurn } = store.getState().app;
    
    const { 
        location,
        ordered, 
        exhausted, 
        disrupted, 
        commanded, 
        casualty, 
        mobilized, 
    } = unit;

    if (!playerTurn || !mobilized) return false;

    // units on the map in the Deployment phase cannot take (another) action until all Deployment pool units have been placed
    if (phase === 'Deployment' && location !== 'D') return false;

    if (( ordered || exhausted || disrupted || commanded || casualty )) {
        return false;
    }
    
    return true;
};
