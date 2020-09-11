const initialState = {
    loading: true,
    playerTurn: true,
    actionsRemaining: {
        player: 5,
        enemy: 0,
    },
    suppression: {
        'green': 0,
        'black': 0,
        'purple': 0,
        'red': 0,
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
            ...state,
            loading: false,
        }
    default:
        return state;
    }
};

export default reducer;
