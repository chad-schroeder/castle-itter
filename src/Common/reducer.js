const initialState = {
    loading: true,
    suppression: {
        purple: 0,
        green: 0,
        black: 0,
        yellow: 0,
        red: 0,
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'APP_LOADING':
        return {
            ...initialState,
        }
    default:
        return state;
    }
};

export default reducer;
