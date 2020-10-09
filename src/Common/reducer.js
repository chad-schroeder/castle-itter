import { v4 as uuidv4 } from 'uuid';

const initialState = {
    loading: true,
    playerTurn: true,
    actionsRemaining: 5, // 5 for player, 3 for axis
    deployment: 'Start', // Start, Normal, Reinforcement
    suppression: {
        purple: 0,
        green: 0,
        black: 0,
        yellow: 0,
        red: 0,
    },
    deck: [], // axis draw deck
    decks: {
        1: [
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, deck: 1, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, deck: 1, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, deck: 1, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, deck: 1, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, deck: 1, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, deck: 1, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, deck: 1, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', deck: 1, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', deck: 1, },
            { id: uuidv4(), type: 'flak88', target: 'flak88', card: 'disrupt', deck: 1, },
            { id: uuidv4(), type: 'pak75', target: 'pak75a', card: 'disrupt', deck: 1, },
            { id: uuidv4(), type: 'pak75', target: 'pak75b', card: 'disrupt', deck: 1, },
        ],
        2: [
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, deck: 2, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, deck: 2, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, deck: 2, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, deck: 2, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, deck: 2, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, deck: 2, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, deck: 2, },
            { id: uuidv4(), type: 'suppressiveFire', card: 'suppress', deck: 2, },
            { id: uuidv4(), type: 'sniper', card: 'sniper', target: 'sniper', deck: 2, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', deck: 2, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', deck: 2, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', deck: 2, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', deck: 2, },
            { id: uuidv4(), type: 'flak20', card: 'disrupt', target: 'flak20', deck: 2, },
            { id: uuidv4(), type: 'flak20', card: 'disrupt', target: 'flak20', deck: 2, },
            { id: uuidv4(), type: 'flak88', card: 'disrupt', target: 'flak88', deck: 2, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75b', deck: 2, },
            { id: uuidv4(), type: 'panzerfaust', card: 'panzerfaust', deck: 2, },
            { id: uuidv4(), type: 'panzerfaust', card: 'panzerfaust', deck: 2, },
        ],
        3: [
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 3, deck: 3, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, deck: 3, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 2, deck: 3, },
            { id: uuidv4(), type: 'suppressiveFire', card: 'suppress', deck: 3, },
            { id: uuidv4(), type: 'sniper', card: 'sniper', target: 'sniper', deck: 3, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', deck: 3, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', deck: 3, },
            { id: uuidv4(), type: 'flak20', card: 'disrupt', target: 'flak20', deck: 3, },
            { id: uuidv4(), type: 'flak88', card: 'disrupt', target: 'flak88', deck: 3, },
            { id: uuidv4(), type: 'flak88', card: 'disrupt', target: 'flak88', deck: 3, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75a', deck: 3, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75a', deck: 3, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75b', deck: 3, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75b', deck: 3, },
            { id: uuidv4(), type: 'panzerfaust', card: 'panzerfaust', deck: 3, },
            { id: uuidv4(), type: 'panzerfaust', card: 'panzerfaust', deck: 3, },
            { id: 'reinforcements', type: 'reinforcements', card: 'reinforcements', deck: 3, text: 'Defenders with the [R] designation have been added to your supply' },
        ],
        4: [
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, deck: 4, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, deck: 4, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 3, deck: 4, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 3, deck: 4, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, deck: 4, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, deck: 4, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 2, deck: 4, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 2, deck: 4, },
            { id: uuidv4(), type: 'suppressiveFire', card: 'suppress', deck: 4, },
            { id: uuidv4(), type: 'suppressiveFire', card: 'suppress', deck: 4, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', deck: 4, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', deck: 4, },
        ],
    },
    deckLevel: 1,
    score: 0,
    gameOver: false,
    hasWon: false,
    escaped: false,
    besottenJennyDestroyed: false,
    besottenJennyCasualties: [],
    enemiesDefeated: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'APP_LOADING':
        return {
            ...initialState,
        }
    case 'APP_LOADED':
        return {
            ...initialState,
            loading: false,
        }
    case 'BUILD_DECK':
        return {
            ...state,
            deck: [...payload],
        }
    case 'PLAYED_CARD':
        return {
            ...state,
            deck: [...payload],
        }
    case 'CHANGE_TURN':
        return {
            ...state,
            ...payload,
        }
    case 'SPEND_ACTION':
        return {
            ...state,
            actionsRemaining: payload,
        }
    case 'ADD_SUPPRESSION':
        return {
            ...state,
            suppression: { ...payload },
        }
    case 'DESTROY_BESOTTEN_JENNY':
        return {
            ...state,
            besottenJennyDestroyed: true,
        }
    case 'ESCAPED':
        return {
            ...state,
            escaped: true,
        }
    case 'GAME_OVER':
        return {
            ...state,
            gameOver: true,
        }
    default:
        return state;
    }
};

export default reducer;
