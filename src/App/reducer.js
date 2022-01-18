import { v4 as uuidv4 } from 'uuid';

const initialState = {
    loading: true, // is game state loading
    paused: false, // has game been paused
    defenderTurn: true, // Defender or Axis
    actionRound: 1, // 5 for player, 3 for Axis
    history: {}, // record of all actions for debugging
    phase: 'Deployment', // Deployment, Cellar, Reinforcement
    suppression: { // Suppression points allocated, per color
        purple: 0,
        green: 0,
        black: 0,
        orange: 0,
    },
    deck: [], // shuffled Axis draw deck
    decks: { // Axis deck
        1: [
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'scout', action: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'scout', action: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'scout', action: 'advance', count: 2, cardDeck: 1, },
            { id: uuidv4(), type: 'sturm', action: 'advance', count: 1, cardDeck: 1, },
            { id: uuidv4(), type: 'machineGun', action: 'disrupt', cardDeck: 1, },
            { id: uuidv4(), type: 'mortar', action: 'disrupt', cardDeck: 1, },
            { id: uuidv4(), type: 'flak88', target: 'flak88', action: 'disrupt', cardDeck: 1, },
            { id: uuidv4(), type: 'pak75', target: 'pak75a', action: 'disrupt', cardDeck: 1, },
            { id: uuidv4(), type: 'pak75', target: 'pak75b', action: 'disrupt', cardDeck: 1, },
        ],
        2: [
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'scout', action: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'scout', action: 'advance', count: 2, cardDeck: 2, },
            { id: uuidv4(), type: 'sturm', action: 'advance', count: 1, cardDeck: 2, },
            { id: uuidv4(), type: 'sturm', action: 'advance', count: 1, cardDeck: 2, },
            { id: uuidv4(), type: 'suppressiveFire', action: 'suppress', cardDeck: 2, },
            { id: uuidv4(), type: 'sniper', action: 'sniper', target: 'sniper', cardDeck: 2, },
            { id: uuidv4(), type: 'machineGun', action: 'disrupt', cardDeck: 2, },
            { id: uuidv4(), type: 'machineGun', action: 'disrupt', cardDeck: 2, },
            { id: uuidv4(), type: 'mortar', action: 'disrupt', cardDeck: 2, },
            { id: uuidv4(), type: 'mortar', action: 'disrupt', cardDeck: 2, },
            { id: uuidv4(), type: 'flak20', action: 'disrupt', target: 'flak20', cardDeck: 2, },
            { id: uuidv4(), type: 'flak20', action: 'disrupt', target: 'flak20', cardDeck: 2, },
            { id: uuidv4(), type: 'flak88', action: 'disrupt', target: 'flak88', cardDeck: 2, },
            { id: uuidv4(), type: 'pak75', action: 'disrupt', target: 'pak75b', cardDeck: 2, },
            { id: uuidv4(), type: 'panzerfaust', action: 'panzerfaust', cardDeck: 2, },
            { id: uuidv4(), type: 'panzerfaust', action: 'panzerfaust', cardDeck: 2, },
        ],
        3: [
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 3, cardDeck: 3, },
            { id: uuidv4(), type: 'sturm', action: 'advance', count: 1, cardDeck: 3, },
            { id: uuidv4(), type: 'sturm', action: 'advance', count: 2, cardDeck: 3, },
            { id: uuidv4(), type: 'suppressiveFire', action: 'suppress', cardDeck: 3, },
            { id: uuidv4(), type: 'sniper', action: 'sniper', target: 'sniper', cardDeck: 3, },
            { id: uuidv4(), type: 'machineGun', action: 'disrupt', cardDeck: 3, },
            { id: uuidv4(), type: 'mortar', action: 'disrupt', cardDeck: 3, },
            { id: uuidv4(), type: 'flak20', action: 'disrupt', target: 'flak20', cardDeck: 3, },
            { id: uuidv4(), type: 'flak88', action: 'disrupt', target: 'flak88', cardDeck: 3, },
            { id: uuidv4(), type: 'flak88', action: 'disrupt', target: 'flak88', cardDeck: 3, },
            { id: uuidv4(), type: 'pak75', action: 'disrupt', target: 'pak75a', cardDeck: 3, },
            { id: uuidv4(), type: 'pak75', action: 'disrupt', target: 'pak75a', cardDeck: 3, },
            { id: uuidv4(), type: 'pak75', action: 'disrupt', target: 'pak75b', cardDeck: 3, },
            { id: uuidv4(), type: 'pak75', action: 'disrupt', target: 'pak75b', cardDeck: 3, },
            { id: uuidv4(), type: 'panzerfaust', action: 'panzerfaust', cardDeck: 3, },
            { id: uuidv4(), type: 'panzerfaust', action: 'panzerfaust', cardDeck: 3, },
            { id: 'reinforcements', type: 'reinforcements', action: 'reinforcements', cardDeck: 3, text: 'Defenders with the [R] designation have been added to your supply' },
        ],
        4: [
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 2, cardDeck: 4, },
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 2, cardDeck: 4, },
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 3, cardDeck: 4, },
            { id: uuidv4(), type: 'rifleman', action: 'advance', count: 3, cardDeck: 4, },
            { id: uuidv4(), type: 'sturm', action: 'advance', count: 1, cardDeck: 4, },
            { id: uuidv4(), type: 'sturm', action: 'advance', count: 1, cardDeck: 4, },
            { id: uuidv4(), type: 'sturm', action: 'advance', count: 2, cardDeck: 4, },
            { id: uuidv4(), type: 'sturm', action: 'advance', count: 2, cardDeck: 4, },
            { id: uuidv4(), type: 'suppressiveFire', action: 'suppress', cardDeck: 4, },
            { id: uuidv4(), type: 'suppressiveFire', action: 'suppress', cardDeck: 4, },
            { id: uuidv4(), type: 'machineGun', action: 'disrupt', cardDeck: 4, },
            { id: uuidv4(), type: 'mortar', action: 'disrupt', cardDeck: 4, },
        ],
    },
    cardPlayed: null,
    activeDefender: null, // id of defender selected for an action
    hasEscaped: false, // has Borotra escaped
    tankLoaded: false, // is tank cannon armed
    tankDestroyed: false,
    tankCasualties: [], // units inside tank when destroyed, used for scoring
    casualties: [], // list of all casualties
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'APP_LOADING':
        return {
            ...initialState,
        }
    case 'APP_LOADED':
        return {
            ...state,
            loading: false,
        }
    case 'SET_GAME_PAUSE': 
        return {
            ...state,
            paused: !state.paused,
        }
    case 'BUILD_DECK':
        return {
            ...state,
            deck: [...payload],
        }
    case 'CARD_PLAYED':
        return {
            ...state,
            deck: [...payload.deck],
            card: payload.card,
        }
    case 'UPDATE_DECK_LEVEL':
        return {
            ...state,
            deckLevel: payload,
        }
    case 'SET_PHASE':
        return {
            ...state,
            phase: payload,
        }
    case 'NEXT_TURN':
        return {
            ...state,
            defenderTurn: !state.defenderTurn,
        }
    case 'NEXT_ACTION':
        return {
            ...state,
            actionRound: payload,
        }
    case 'ADD_SUPPRESSION':
        return {
            ...state,
            suppression: { ...payload },
        }
    case 'SET_ACTIVE_DEFENDER':
            return {
                ...state,
                activeDefender: payload,
            }
    case 'UNSET_ACTIVE_DEFENDER':
        return {
            ...state,
            activeDefender: null,
        }
    case 'TANK_CANNON_LOADED':
        return {
            ...state,
            tankLoaded: true,
        }
    case 'TANK_CANNON_FIRED':
        return {
            ...state,
            tankLoaded: false,
        }
    case 'DESTROY_BESOTTEN_JENNY':
        return {
            ...state,
            tankDestroyed: true,
            tankCasualties: [...payload],
        }
    case 'BOROTRA_ESCAPED':
        return {
            ...state,
            hasEscaped: true,
        }
    case 'GAME_OVER':
        return {
            ...state,
            paused: true,
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
