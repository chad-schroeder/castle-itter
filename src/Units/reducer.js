const initialState = {
    allies: [
        {
            id: 'basse',
            name: 'Basse',
            nationality: 'USA',
            attack: 1,
            suppress: 2,
            commander: true,
            tanker: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D1',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'lee',
            name: 'Lee',
            nationality: 'USA',
            attack: 1,
            suppress: 2,
            commander: true,
            tanker: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D2',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'worsham',
            name: 'Worsham',
            nationality: 'USA',
            attack: 1,
            suppress: 1,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D3',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'pollack',
            name: 'Pollack',
            nationality: 'USA',
            attack: 2,
            suppress: 3,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D4',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'sutton',
            name: 'Sutton',
            nationality: 'USA',
            attack: 1,
            suppress: 1,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D5',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'petrukovich',
            name: 'Petrukovich',
            nationality: 'USA',
            attack: 1,
            suppress: 1,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D6',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'steiner',
            name: 'Steiner',
            nationality: 'USA',
            attack: 1,
            suppress: 2,
            tanker: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D7',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'szymczyk',
            name: 'Szymczyk',
            nationality: 'USA',
            attack: 1,
            suppress: 2,
            tanker: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D8',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'rushford',
            name: 'Rushford',
            nationality: 'USA',
            attack: 1,
            suppress: 2,
            tanker: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D9',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'mchaley',
            name: 'McHaley',
            nationality: 'USA',
            attack: 1,
            suppress: 2,
            tanker: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D10',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'schrader',
            name: 'Schrader',
            nationality: 'SS',
            attack: 1,
            suppress: 2,
            commander: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D11',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'gangl',
            name: 'Gangl',
            nationality: 'GER',
            attack: 1,
            suppress: 2,
            commander: true,
            officer: true,
            sacrifice: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D12',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'dietrich',
            name: 'Dietrich',
            nationality: 'GER',
            attack: 1,
            suppress: 1,
            officer: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D13',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'hockel',
            name: 'Hockel',
            nationality: 'GER',
            attack: 1,
            suppress: 1,
            officer: true,
            ordered: false,
            commanded: false,
            disrupted: true,
            exhausted: false,
            casualty: false,
            tileId: 'D14',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'blechschmidt',
            name: 'Blechschmidt',
            nationality: 'GER',
            attack: 1,
            suppress: 1,
            officer: true,
            ordered: false,
            commanded: true,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D15',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'rifleman1',
            name: 'Rifleman',
            nationality: 'GER',
            attack: 1,
            suppress: 1,
            morale: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D16',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'rifleman2',
            name: 'Rifleman',
            nationality: 'GER',
            attack: 1,
            suppress: 1,
            morale: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D17',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'rifleman3',
            name: 'Rifleman',
            nationality: 'GER',
            attack: 1,
            suppress: 1,
            morale: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D18',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'rifleman4',
            name: 'Rifleman',
            nationality: 'GER',
            attack: 1,
            suppress: 1,
            morale: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D19',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'rifleman5',
            name: 'Rifleman',
            nationality: 'GER',
            attack: 1,
            suppress: 1,
            morale: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'D20',
            location: 'D',
            los: [],
            armament: {},
        },
        {
            id: 'wegscheider',
            name: 'Wegscheider',
            nationality: 'GER',
            attack: 1,
            suppress: 2,
            officer: true,
            reinforcement: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'R1',
            location: 'R',
            los: [],
            armament: {},
        },
        {
            id: 'linson',
            name: 'Linson',
            nationality: 'GER',
            attack: 1,
            suppress: 2,
            reinforcement: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'R2',
            location: 'R',
            los: [],
            armament: {},
        },
        {
            id: 'waltl',
            name: 'Waltl',
            nationality: 'AUS',
            attack: 1,
            suppress: 2,
            reinforcement: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'R3',
            location: 'R',
            los: [],
            armament: {},
        },
        {
            id: 'clemenceau',
            name: 'Clemenceau',
            nationality: 'FRA',
            attack: 0,
            suppress: 1,
            inspire: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'C1',
            location: 'C',
            los: [],
            armament: {},
        },
        {
            id: 'gamelin',
            name: 'Gamelin',
            nationality: 'FRA',
            attack: 0,
            suppress: 1,
            inspire: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'C2',
            location: 'C',
            los: [],
            armament: {},
        },
        {
            id: 'rocque',
            name: 'De La Rocque',
            nationality: 'FRA',
            attack: 0,
            suppress: 1,
            inspire: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'C3',
            location: 'C',
            los: [],
            armament: {},
        },
        {
            id: 'reynaud',
            name: 'Reynaud',
            nationality: 'FRA',
            attack: 0,
            suppress: 1,
            inspire: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'C4',
            location: 'C',
            los: [],
            armament: {},
        },
        {
            id: 'borotra',
            name: 'Borotra',
            nationality: 'FRA',
            attack: 0,
            suppress: 1,
            escape: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tileId: 'C5',
            location: 'C',
            los: [],
            armament: {},
        },
    ],
    axis: {
        rifleman: {
            id: 'rifleman',
            name: 'Rifleman',
            defense: 3,
            counter: true,
            advance: true,
        },
        scout: {
            id: 'scout',
            name: 'Scout',
            defense: 4,
            counter: true,
            advance: true,
        },
        sturm: {
            id: 'sturm',
            name: 'Sturm',
            defense: 5,
            counter: true,
            advance: true,
        },
        suppressiveFire: {
            id: 'sf',
            name: 'Suppressive Fire',
            disrupt: true,
        },
        sniper: {
            id: 'sniper',
            name: 'Sniper',
            attack: 4,
        },
        machineGun: {
            id: 'mg',
            name: 'Machine Gunner',
            attack: 2,
            defense: 4,
            counter: true,
            disrupt: true,
        },
        mortar: {
            id: 'mortar',
            name: 'Mortar',
            attack: 3,
            defense: 4,
            counter: true,
            disrupt: true,
        },
        flak20: {
            id: 'flak20',
            name: '20mm FLAK 30',
            attack: 2,
            disrupt: true,
        },
        flak88: {
            id: 'flak88',
            name: '88mm FLAK 37',
            attack: 5,
            disrupt: true,
        },
        pak75: {
            id: 'pak75',
            name: '75mm PAK 40',
            attack: 4,
            disrupt: true,
        },
        panzerfaust: {
            id: 'pf',
            name: 'Panzerfaust',
            attack: 4,
        },
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'RESET_UNITS':
        return {
            ...initialState,
        }
    case 'UPDATE_ALLY':
        return {
            ...state,
            allies: state.allies.map(unit => {
                if (unit.id === payload.id) {
                    return payload;
                }
                return unit;
            }),
        }
    case 'UPDATE_ALLIES':
        return {
            ...state,
            allies: state.allies.map(unit => {
                if (unit.id === payload.unitId) {
                    return {
                        ...unit,
                        tile: payload.toTileId,
                    }
                }
                return unit;
            }),
        }
    case 'ACTIVATE_UNIT': 
        return {
            ...state,
            allies: state.allies.map(unit => {
                if (unit.id === payload) {
                    return {
                        ...unit,
                        mobilized: true,
                    }
                }
                return unit;
            }),
        }
    case 'RECOVER_UNIT':
        return {
            ...state,
            allies: state.allies.map(unit => {
                if (unit.id === payload) {
                    return {
                        ...unit,
                        ordered: true,
                        exhausted: false,
                    }
                }
                return unit;
            }),
        }
    case 'TOGGLE_EXHAUSTION':
        return {
            ...state,
            allies: state.allies.map(unit => {
                if (unit.id === payload) {
                    return {
                        ...unit,
                        exhausted: !unit.exhausted,
                    }
                }
                return unit;
            }),
        }
    case 'TOGGLE_DISRUPTED':
        return {
            ...state,
            allies: state.allies.map(unit => {
                if (unit.id === payload) {
                    return {
                        ...unit,
                        disrupted: !unit.disrupted,
                    }
                }
                return unit;
            })
        }
    case 'TOGGLE_ORDERED':
        return {
            ...state,
            allies: state.allies.map(unit => {
                if (unit.id === payload) {
                    return {
                        ...unit,
                        ordered: !unit.ordered,
                    }
                }
                return unit;
            }),
        }
    case 'TOGGLE_COMMANDED':
        return {
            ...state,
            allies: state.allies.map(unit => {
                if (unit.id === payload) {
                    return {
                        ...unit,
                        commanded: !unit.commanded,
                    }
                }
                return unit;
            }),
        }
    case 'TOGGLE_CASUALTY':
        return {
            ...state,
            allies: state.allies.map(unit => {
                if (unit.id === payload) {
                    return {
                        ...unit,
                        casualty: !unit.casualty,
                    }
                }
                return unit;
            }),
        }
    default:
        return state;
    }
};

export default reducer;
