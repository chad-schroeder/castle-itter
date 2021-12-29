export const canTakeAction = ({ ordered, exhausted, disrupted, commanded }) => {
    return (ordered || exhausted || disrupted || commanded) ? false: true;
};
