import { v4 as uuidv4 } from 'uuid';

const initialState = {
    loading: true, // is game state loading
    paused: false, // has game been paused
    defenderTurn: true, // Defender or Axis
    actionRound: 1, // 5 rounds for Defender, 3 for Axis
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
    activeCard: null, // current card drawn from the Axis deck
    activeDefenderId: null, // id of defender selected to take an action
    currentAction: '', // current defender action
    displayDialog: 'gameStart', // current dialog shown to player
    hasEscaped: false, // did Borotra escape
    tankLoaded: false, // was the tank cannon armed
    tankDestroyed: false, // was the Besotten Jenny destroyed
    tankCasualties: [], // list of units inside the tank when destroyed, used for scoring
    casualties: [], // list of all defender casualties
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
    case 'MODIFY_SUPPRESSION':
        return {
            ...state,
            suppression: { 
                ...state.suppression,
                ...payload,
            },
        }
    case 'SET_CURRENT_ACTION':
        return {
            ...state,
            currentAction: payload,
        }
    case 'UNSET_CURRENT_ACTION':    
        return {
            ...state,
            currentAction: '',
        }
    case 'SET_ACTIVE_DEFENDER_ID':
            return {
                ...state,
                activeDefenderId: payload,
            }
    case 'UNSET_ACTIVE_DEFENDER_ID':
        return {
            ...state,
            activeDefenderId: null,
        }
    case 'DISPLAY_DIALOG':
        return {
            ...state,
            displayDialog: payload,
        }
    case 'CLOSE_DIALOG':
        return {
            ...state,
            displayDialog: false,
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
