const initialState = {
    soldiers: ['Pollack', 'Steiner'],
    reinforcements: ['Smiley'],
    prisoners: ['Rouseau'],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'RESTORE_UNITS':
        return {
            ...initialState,
        }
    default:
        return state;
    }
};

export default reducer;
