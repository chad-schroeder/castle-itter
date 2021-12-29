export const canTakeAction = ({ ordered, exhausted, disrupted, commanded }) => {
    if ((ordered || exhausted || disrupted || commanded)) {
        return false;
    }
    return true;
};
