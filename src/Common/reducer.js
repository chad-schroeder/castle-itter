import { v4 as uuidv4 } from 'uuid'; // uuidv4()

const initialState = {
    loading: true,
    playerTurn: true,
    actionsRemaining: 5, // enemy turn gets 3
    suppression: {
        purple: 0,
        green: 0,
        black: 0,
        yellow: 0,
        red: 0,
    },
    deck: [],
    decks: {
        1: [
            { id: uuidv4(), type: 'RF', count: 2, deck: 1, },
            { id: uuidv4(), type: 'RF', count: 2, deck: 1, },
            { id: uuidv4(), type: 'RF', count: 2, deck: 1, },
            { id: uuidv4(), type: 'SC', count: 2, deck: 1, },
            { id: uuidv4(), type: 'SC', count: 2, deck: 1, },
            { id: uuidv4(), type: 'SC', count: 2, deck: 1, },
            { id: uuidv4(), type: 'ST', count: 1, deck: 1, },
            { id: uuidv4(), type: 'MG', deck: 1, },
            { id: uuidv4(), type: 'MT', deck: 1, },
            { id: uuidv4(), type: 'FL88', target: 'FL88', deck: 1, },
            { id: uuidv4(), type: 'PA75', target: 'PA75A', deck: 1, },
            { id: uuidv4(), type: 'PA75', target: 'PA75B', deck: 1, },
        ],
        2: [
            { id: uuidv4(), type: 'RF', count: 2, deck: 2, },
            { id: uuidv4(), type: 'RF', count: 2, deck: 2, },
            { id: uuidv4(), type: 'RF', count: 2, deck: 2, },
            { id: uuidv4(), type: 'SC', count: 2, deck: 2, },
            { id: uuidv4(), type: 'SC', count: 2, deck: 2, },
            { id: uuidv4(), type: 'ST', count: 1, deck: 2, },
            { id: uuidv4(), type: 'ST', count: 1, deck: 2, },
            { id: uuidv4(), type: 'SF', deck: 2, },
            { id: uuidv4(), type: 'SN', target: 'SN', deck: 2, },
            { id: uuidv4(), type: 'MG', deck: 2, },
            { id: uuidv4(), type: 'MG', deck: 2, },
            { id: uuidv4(), type: 'MT', deck: 2, },
            { id: uuidv4(), type: 'MT', deck: 2, },
            { id: uuidv4(), type: 'FL20', target: 'FL20', deck: 2, },
            { id: uuidv4(), type: 'FL20', target: 'FL20', deck: 2, },
            { id: uuidv4(), type: 'FL88', target: 'FL88', deck: 2, },
            { id: uuidv4(), type: 'PA75', target: 'PA75B', deck: 2, },
            { id: uuidv4(), type: 'PF', deck: 2, },
            { id: uuidv4(), type: 'PF', deck: 2, },
        ],
        3: [
            { id: uuidv4(), type: 'RF', count: 3, deck: 3, },
            { id: uuidv4(), type: 'ST', count: 1, deck: 3, },
            { id: uuidv4(), type: 'ST', count: 2, deck: 3, },
            { id: uuidv4(), type: 'SF', deck: 3, },
            { id: uuidv4(), type: 'SN', target: 'SN', deck: 3, },
            { id: uuidv4(), type: 'MG', deck: 3, },
            { id: uuidv4(), type: 'MT', deck: 3, },
            { id: uuidv4(), type: 'FL20', target: 'FL20', deck: 3, },
            { id: uuidv4(), type: 'FL88', target: 'FL88', deck: 3, },
            { id: uuidv4(), type: 'FL88', target: 'FL88', deck: 3, },
            { id: uuidv4(), type: 'PA75', target: 'PA75A', deck: 3, },
            { id: uuidv4(), type: 'PA75', target: 'PA75A', deck: 3, },
            { id: uuidv4(), type: 'PA75', target: 'PA75B', deck: 3, },
            { id: uuidv4(), type: 'PA75', target: 'PA75B', deck: 3, },
            { id: uuidv4(), type: 'PF', deck: 3, },
            { id: uuidv4(), type: 'PF', deck: 3, },
        ],
        4: [
            { id: uuidv4(), type: 'RF', count: 2, deck: 4, },
            { id: uuidv4(), type: 'RF', count: 2, deck: 4, },
            { id: uuidv4(), type: 'RF', count: 3, deck: 4, },
            { id: uuidv4(), type: 'RF', count: 3, deck: 4, },
            { id: uuidv4(), type: 'ST', count: 1, deck: 4, },
            { id: uuidv4(), type: 'ST', count: 1, deck: 4, },
            { id: uuidv4(), type: 'ST', count: 2, deck: 4, },
            { id: uuidv4(), type: 'ST', count: 2, deck: 4, },
            { id: uuidv4(), type: 'SF', deck: 4, },
            { id: uuidv4(), type: 'SF', deck: 4, },
            { id: uuidv4(), type: 'MG', deck: 4, },
            { id: uuidv4(), type: 'MT', deck: 4, },
        ],
    },
    score: 0,
    escaped: false,
    enemies: {
        deployed: [],
        defeated: [],
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
    case 'BUILD_DECK':
        return {
            ...state,
            deck: [...payload],
        };
    case 'CHANGE_TURN':
        return {
            ...state,
            ...payload,
        };
    case 'ADD_SUPPRESSION':
        return {
            ...state,
            suppression: { ...payload },
        };
    default:
        return state;
    }
};

export default reducer;
