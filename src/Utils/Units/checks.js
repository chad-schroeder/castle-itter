export const canTakeAction = ({ ordered, exhausted, disrupted, commanded, casualty }) => {
    if ((ordered || exhausted || disrupted || commanded || casualty)) {
        return false;
    }
    return true;
};

export const canEscape = (unit) => {
    // only borotra can attempt to escape
    if (unit.unitId !== 'borotra') return;

    // borotra must be able to take an action
    if (!canTakeAction(unit)) return;

    const location = unit.location;

    // borotra cannot escape from the cellar
    if (location === 'C') return;

    console.log('here');

    return true;
};
