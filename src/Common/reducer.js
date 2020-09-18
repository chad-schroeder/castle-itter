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
        };
    case 'APP_LOADED':
        return {
            ...initialState,
            loading: false,
        };
    case 'ADD_SUPPRESSION':
        return {
            ...state,
            suppression: { ...payload },
        }
    default:
        return state;
    }
};

export default reducer;