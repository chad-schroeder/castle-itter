const initialState = {
    defenders: [
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
            tile: 'K1',
            location: 'K',
            los: ['orange'],
            armament: null,
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
            disrupted: true,
            exhausted: false,
            casualty: false,
            tile: 'K2',
            location: 'K',
            los: ['orange'],
            armament: null,
        },
        {
            id: 'worsham',
            name: 'Worsham',
            nationality: 'USA',
            attack: 1,
            suppress: 4, // 1
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: true,
            casualty: false,
            tile: 'K3',
            location: 'K',
            los: ['orange', 'green'],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
        },
        {
            id: 'schrader',
            name: 'Schrader',
            nationality: 'GER',
            attack: 1,
            suppress: 2,
            commander: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            disrupted: false,
            exhausted: false,
            casualty: false,
            tile: null,
            location: null,
            los: [],
            armament: null,
        },
        {
            id: 'blechschmidt',
            name: 'Blechschmidt',
            nationality: 'GER',
            attack: 1,
            suppress: 1,
            officer: true,
            ordered: false,
            commanded: false,
            disrupted: false,
            exhausted: false,
            casualty: false,
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            locked: true,
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            locked: true,
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            locked: true,
            tile: null,
            location: null,
            los: [],
            armament: null,
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
            locked: true,
            tile: 'C1',
            location: 'C',
            los: [],
            armament: null,
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
            locked: true,
            tile: 'C2',
            location: 'C',
            los: [],
            armament: null,
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
            locked: true,
            tile: 'C3',
            location: 'C',
            los: [],
            armament: null,
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
            locked: true,
            tile: 'C4',
            location: 'C',
            los: [],
            armament: null,
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
            locked: true,
            tile: 'C5',
            location: 'C',
            los: [],
            armament: null,
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
    case 'UPDATE_DEFENDER':
        return {
            ...state,
            defenders: state.defenders.map(unit => {
                if (unit.id === payload.id) {
                    return payload;
                }
                return unit;
            }),
        }
    case 'CLEAR_UNIT_ACTIVATIONS': {
        return {
            ...state,
            defenders: state.defenders.map(unit => {
                return {
                    ...unit,
                    ordered: false,
                    commanded: false,
                }
            }),
        }
    }
    case 'TOGGLE_EXHAUSTION':
        return {
            ...state,
            defenders: state.defenders.map(unit => {
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
            defenders: state.defenders.map(unit => {
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
            defenders: state.defenders.map(unit => {
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
            defenders: state.defenders.map(unit => {
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
            defenders: state.defenders.map(unit => {
                if (unit.id === payload) {
                    return {
                        ...unit,
                        casualty: !unit.casualty,
                    }
                }
                return unit;
            }),
        }
    case 'PHASE_CELLAR':
        return {
            ...state,
            defenders: state.defenders.map(unit => {
                if (unit.location === 'C') {
                    return {
                        ...unit,
                        locked: false,
                    }
                } else if (unit.deployed) {
                    return {
                        ...unit,
                        deployed: false,
                    }
                }
                return unit;
            }),
        }
    case 'PHASE_REINFORCEMENT':
        return {
            ...state,
            defenders: state.defenders.map(unit => {
                if (unit.reinforcement) {
                    return {
                        ...unit,
                        locked: false,
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
