const initialState = {
    spaces: ['a1', 'b1', 'c1'],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'MAP_LOADING':
        return {
            ...initialState,
        };
    case 'UPDATE_MAP_SPACES':
        return {
            ...initialState,
            spaces: ['d1'],
        }
    case 'RESET_MAP_SPACES':
        return {
            ...initialState,
        }
    default:
        return state;
    }
};

export default reducer;
