const initialState = {
    loading: true,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'APP_LOADING':
        return {
            ...initialState,
        };
    case 'APP_LOADED':
        return {
            ...state,
            loading: false,
        }
    default:
        return state;
    }
};

export default reducer;
