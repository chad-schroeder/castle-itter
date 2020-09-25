const initialState = {
    loading: true,
    suppression: {
        purple: 0,
        green: 0,
        black: 0,
        yellow: 0,
        red: 0,
    },
    decks: {
        1: [
            { type: 'RF', count: 2, deck: 1, },
            { type: 'RF', count: 2, deck: 1, },
            { type: 'RF', count: 2, deck: 1, },
            { type: 'SC', count: 2, deck: 1, },
            { type: 'SC', count: 2, deck: 1, },
            { type: 'SC', count: 2, deck: 1, },
            { type: 'ST', count: 1, deck: 1, },
            { type: 'MG', deck: 1, },
            { type: 'MT', deck: 1, },
            { type: 'FL88', target: 'FL88', deck: 1, },
            { type: 'PA75', target: 'PA75A', deck: 1, },
            { type: 'PA75', target: 'PA75B', deck: 1, },
        ],
        2: [
            { type: 'RF', count: 2, deck: 2, },
            { type: 'RF', count: 2, deck: 2, },
            { type: 'RF', count: 2, deck: 2, },
            { type: 'SC', count: 2, deck: 2, },
            { type: 'SC', count: 2, deck: 2, },
            { type: 'ST', count: 1, deck: 2, },
            { type: 'ST', count: 1, deck: 2, },
            { type: 'SF', deck: 2, },
            { type: 'SN', target: 'SN', deck: 2, },
            { type: 'MG', deck: 2, },
            { type: 'MG', deck: 2, },
            { type: 'MT', deck: 2, },
            { type: 'MT', deck: 2, },
            { type: 'FL20', target: 'FL20', deck: 2, },
            { type: 'FL20', target: 'FL20', deck: 2, },
            { type: 'FL88', target: 'FL88', deck: 2, },
            { type: 'PA75', target: 'PA75B', deck: 2, },
            { type: 'PF', deck: 2, },
            { type: 'PF', deck: 2, },
        ],
        3: [
            { type: 'RF', count: 3, deck: 3, },
            { type: 'ST', count: 1, deck: 3, },
            { type: 'ST', count: 2, deck: 3, },
            { type: 'SF', deck: 3, },
            { type: 'SN', target: 'SN', deck: 3, },
            { type: 'MG', deck: 3, },
            { type: 'MT', deck: 3, },
            { type: 'FL20', target: 'FL20', deck: 3, },
            { type: 'FL88', target: 'FL88', deck: 3, },
            { type: 'FL88', target: 'FL88', deck: 3, },
            { type: 'PA75', target: 'PA75A', deck: 3, },
            { type: 'PA75', target: 'PA75A', deck: 3, },
            { type: 'PA75', target: 'PA75B', deck: 3, },
            { type: 'PA75', target: 'PA75B', deck: 3, },
            { type: 'PF', deck: 3, },
            { type: 'PF', deck: 3, },
        ],
        4: [
            { type: 'RF', count: 2, deck: 4, },
            { type: 'RF', count: 2, deck: 4, },
            { type: 'RF', count: 3, deck: 4, },
            { type: 'RF', count: 3, deck: 4, },
            { type: 'ST', count: 1, deck: 4, },
            { type: 'ST', count: 1, deck: 4, },
            { type: 'ST', count: 2, deck: 4, },
            { type: 'ST', count: 2, deck: 4, },
            { type: 'SF', deck: 4, },
            { type: 'SF', deck: 4, },
            { type: 'MG', deck: 4, },
            { type: 'MT', deck: 4, },
        ],
    },
    targeting: {
        axis: {
            SN: {
                1: 'black',
                2: 'black',
                3: 'green',
                4: 'yellow',
                5: 'red',
                6: 'purple',
            },
            FL20: {
                1: 'purple',
                2: 'purple',
                3: 'purple',
                4: 'red',
                5: 'red',
                6: 'red',
            },
            FL88: {
                1: 'K',
                2: 'K',
                3: 'GH',
                4: 'NT',
                5: 'NT',
                6: 'NT',
            },
            PA75A: {
                1: 'BJ',
                2: 'BJ',
                3: 'G',
                4: 'G',
                5: 'G',
                6: 'GH'
            },
            PA75B: {
                1: 'K',
                2: 'K',
                3: 'GH',
                4: 'ST',
                5: 'ST',
                6: 'ST',
            },
            orange: ['K1', 'K2', 'K3', 'K4', 'ST5', 'NT6'],
            purple: ['GH1', 'NT2', 'NT3', 'K4', 'NT5', 'NT6'],
            green: ['GH1', 'ST2', 'K3', 'ST4', 'ST5', 'ST6'],
            yellow: ['G1', 'G2', 'GH3', 'GH4', 'NT5', 'ST6'],
            black: ['G1', 'G2', 'G3', 'G4', 'G4', 'G4'],
        },
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
