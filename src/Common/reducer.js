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
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, cardDeck: 1, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', cardDeck: 1, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', cardDeck: 1, },
            { id: uuidv4(), type: 'flak88', target: 'flak88', card: 'disrupt', cardDeck: 1, },
            { id: uuidv4(), type: 'pak75', target: 'pak75a', card: 'disrupt', cardDeck: 1, },
            { id: uuidv4(), type: 'pak75', target: 'pak75b', card: 'disrupt', cardDeck: 1, },
        ],
        2: [
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'scout', card: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, cardDeck: 2, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, cardDeck: 2, },
            { id: uuidv4(), type: 'suppressiveFire', card: 'suppress', cardDeck: 2, },
            { id: uuidv4(), type: 'sniper', card: 'sniper', target: 'sniper', cardDeck: 2, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', cardDeck: 2, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', cardDeck: 2, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', cardDeck: 2, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', cardDeck: 2, },
            { id: uuidv4(), type: 'flak20', card: 'disrupt', target: 'flak20', cardDeck: 2, },
            { id: uuidv4(), type: 'flak20', card: 'disrupt', target: 'flak20', cardDeck: 2, },
            { id: uuidv4(), type: 'flak88', card: 'disrupt', target: 'flak88', cardDeck: 2, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75b', cardDeck: 2, },
            { id: uuidv4(), type: 'panzerfaust', card: 'panzerfaust', cardDeck: 2, },
            { id: uuidv4(), type: 'panzerfaust', card: 'panzerfaust', cardDeck: 2, },
        ],
        3: [
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 3, cardDeck: 3, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, cardDeck: 3, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 2, cardDeck: 3, },
            { id: uuidv4(), type: 'suppressiveFire', card: 'suppress', cardDeck: 3, },
            { id: uuidv4(), type: 'sniper', card: 'sniper', target: 'sniper', cardDeck: 3, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', cardDeck: 3, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', cardDeck: 3, },
            { id: uuidv4(), type: 'flak20', card: 'disrupt', target: 'flak20', cardDeck: 3, },
            { id: uuidv4(), type: 'flak88', card: 'disrupt', target: 'flak88', cardDeck: 3, },
            { id: uuidv4(), type: 'flak88', card: 'disrupt', target: 'flak88', cardDeck: 3, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75a', cardDeck: 3, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75a', cardDeck: 3, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75b', cardDeck: 3, },
            { id: uuidv4(), type: 'pak75', card: 'disrupt', target: 'pak75b', cardDeck: 3, },
            { id: uuidv4(), type: 'panzerfaust', card: 'panzerfaust', cardDeck: 3, },
            { id: uuidv4(), type: 'panzerfaust', card: 'panzerfaust', cardDeck: 3, },
            { id: 'reinforcements', type: 'reinforcements', card: 'reinforcements', cardDeck: 3, text: 'Defenders with the [R] designation have been added to your supply' },
        ],
        4: [
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, cardDeck: 4, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 2, cardDeck: 4, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 3, cardDeck: 4, },
            { id: uuidv4(), type: 'rifleman', card: 'advance', count: 3, cardDeck: 4, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, cardDeck: 4, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 1, cardDeck: 4, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 2, cardDeck: 4, },
            { id: uuidv4(), type: 'sturm', card: 'advance', count: 2, cardDeck: 4, },
            { id: uuidv4(), type: 'suppressiveFire', card: 'suppress', cardDeck: 4, },
            { id: uuidv4(), type: 'suppressiveFire', card: 'suppress', cardDeck: 4, },
            { id: uuidv4(), type: 'machineGun', card: 'disrupt', cardDeck: 4, },
            { id: uuidv4(), type: 'mortar', card: 'disrupt', cardDeck: 4, },
        ],
    },
    deckLevel: 1, // current deck cards are being drawn from
    score: 0,
    gameOver: false,
    hasWon: null, // null, true, false
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
    case 'UPDATE_DECK_LEVEL':
        return {
            ...state,
            deckLevel: payload,
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
            besottenJennyCasualties: [...payload],
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
            hasWon: payload,
        }
    case 'NEW_GAME':
        return {
            ...initialState,
        }
    default:
        return state;
    }
};

export default reducer;
