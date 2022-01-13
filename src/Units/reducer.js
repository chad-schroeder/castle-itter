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
            activated: true,
            tile: 'BJ3',
            location: 'BJ',
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
            activated: true,
            tile: 'NT3',
            location: 'NT',
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
            activated: false,
            tile: 'D3',
            location: 'D',
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
            activated: false,
            tile: 'D4',
            location: 'D',
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
            activated: false,
            tile: 'D5',
            location: 'D',
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
            activated: false,
            tile: 'D6',
            location: 'D',
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
            activated: false,
            tile: 'D7',
            location: 'D',
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
            activated: false,
            tile: 'D8',
            location: 'D',
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
            activated: false,
            tile: 'D9',
            location: 'D',
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
            activated: false,
            tile: 'D10',
            location: 'D',
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
            activated: false,
            tile: 'D11',
            location: 'D',
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
            activated: false,
            tile: 'D12',
            location: 'D',
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
            activated: false,
            tile: 'D13',
            location: 'D',
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
            activated: false,
            tile: 'D14',
            location: 'D',
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
            activated: false,
            tile: 'D15',
            location: 'D',
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
            activated: false,
            tile: 'D16',
            location: 'D',
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
            activated: false,
            tile: 'D17',
            location: 'D',
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
            activated: false,
            tile: 'D18',
            location: 'D',
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
            activated: false,
            tile: 'D19',
            location: 'D',
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
            activated: false,
            tile: 'D20',
            location: 'D',
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
            activated: false,
            tile: 'R1',
            location: 'R',
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
            activated: false,
            tile: 'R2',
            location: 'R',
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
            activated: false,
            tile: 'R3',
            location: 'R',
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
            activated: false,
            tile: 'C1',
            location: 'C',
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
            activated: false,
            tile: 'C2',
            location: 'C',
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
            activated: false,
            tile: 'C3',
            location: 'C',
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
            activated: false,
            tile: 'C4',
            location: 'C',
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
            activated: false,
            tile: 'C5',
            location: 'C',
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
                        activated: true,
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
