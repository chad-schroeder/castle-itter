const initialState = {
    locations: { // hero areas
        NT: {
            id: 'NT',
            name: 'North Terrace',
            tiles: ['NT2', 'NT3', 'NT5', 'NT6'],
            defense: 6,
            inspire: [],
        },
        ST: {
            id: 'ST',
            name: 'South Terrace',
            tiles: ['ST2', 'ST4', 'ST5', 'ST6'],
            defense: 6,
            inspire: [],
        },
        K: {
            id: 'K',
            name: 'Keep',
            tiles: ['K1', 'K2', 'K3', 'K4'],
            defense: 6,
            inspire: [],
        },
        GH: {
            id: 'GH',
            name: 'Great Hall',
            tiles: ['GH1', 'GH2', 'GH3', 'GH4'],
            defense: 6,
            inspire: [],
        },
        G: {
            id: 'G',
            name: 'Gatehouse',
            tiles: ['G1', 'G2', 'G3', 'G4'],
            defense: 6,
            inspire: [],
        },
        BJ: {
            id: 'BJ',
            name: 'Besotten Jenny',
            tiles: ['BJ1', 'BJ2', 'BJ3', 'BJ4'],
            defense: 6,
            inspire: [],
        },
        C: {
            id: 'C',
            name: 'Cellar',
            tiles: ['C1', 'C2', 'C3', 'C4', 'C5'],
            defense: 6,
            inspire: [],
        },
    },
    tiles: [ // hero tiles
        {
            id: 'NT2',
            location: 'NT',
            los: ['purple'],
            unit: null,
        },
        {
            id: 'NT3',
            location: 'NT',
            los: ['purple'],
            unit: null,
        },
        {
            id: 'NT5',
            location: 'NT',
            los: ['purple', 'yellow'],
            unit: null,
        },
        {
            id: 'NT6',
            location: 'NT',
            los: ['purple', 'orange'],
            unit: null,
        },
        {
            id: 'ST2',
            location: 'ST',
            los: ['green'],
            unit: null,
        },
        {
            id: 'ST4',
            location: 'ST',
            los: ['green'],
            unit: null,
        },
        {
            id: 'ST5',
            location: 'ST',
            los: ['green', 'orange'],
            unit: null,
        },
        {
            id: 'ST6',
            location: 'ST',
            los: ['green', 'yellow'],
            unit: null,
        },
        {
            id: 'K1',
            location: 'K',
            los: ['orange'],
            unit: null,
        },
        {
            id: 'K2',
            location: 'K',
            los: ['orange'],
            unit: null,
        },
        {
            id: 'K3',
            location: 'K',
            los: ['orange', 'green'],
            unit: null,
        },
        {
            id: 'K4',
            location: 'K',
            los: ['orange', 'purple'],
            unit: null,
        },
        {
            id: 'GH1',
            location: 'GH',
            los: ['purple'],
            unit: null,
        },
        {
            id: 'GH2',
            location: 'GH',
            los: ['green'],
            unit: null,
        },
        {
            id: 'GH3',
            location: 'GH',
            los: ['yellow'],
            unit: null,
        },
        {
            id: 'GH4',
            location: 'GH',
            los: ['yellow'],
            unit: null,
        },
        {
            id: 'G1',
            location: 'G',
            los: ['yellow', 'black'],
            unit: null,
        },
        {
            id: 'G2',
            location: 'G',
            los: ['yellow', 'black'],
            unit: 'pollack',
        },
        {
            id: 'G3',
            location: 'G',
            los: ['black'],
            unit: 'clemenceau',
        },
        {
            id: 'G4',
            location: 'G',
            los: ['black'],
            unit: 'basse',
            armament: {
                name: 'M13/A4',
                attack: 2,
                suppress: 3,
            }
        }, 
        {
            id: 'BJ1',
            location: 'BJ',
            los: [],
            unit: 'steiner',
            destroyed: null,
            armament: {
                name: '76mm (Load)',
                load: true,
            },
        },
        {
            id: 'BJ2',
            location: 'BJ',
            los: ['black'],
            unit: null,
            destroyed: null,
            armament: {
                name: '76mm (Fire)',
                attack: 4,
                suppress: 7,
                loaded: false,
            },
        },
        {
            id: 'BJ3',
            location: 'BJ',
            los: ['black'],
            unit: 'rushford',
            destroyed: null,
            armament: {
                name: 'M2HB',
                attack: 2,
                suppress: 4,
            },
        },
        {
            id: 'BJ4',
            location: 'BJ',
            los: ['black'],
            unit: null,
            destroyed: null,
            armament: {
                name: 'M1919A4',
                attack: 2,
                suppress: 3,
            },
        },
        {
            id: 'C1',
            location: 'C',
            los: [],
            unit: 'gamelin',
        },
        {
            id: 'C2',
            location: 'C',
            los: [],
            unit: null,
        },
        {
            id: 'C3',
            location: 'C',
            los: [],
            unit: 'rocque',
        },
        {
            id: 'C4',
            location: 'C',
            los: [],
            unit: 'reynaud',
        },
        {
            id: 'C5',
            location: 'C',
            los: [],
            unit: 'borotra',
        },
        {
            id: 'D1',
            location: 'D',
            los: [],
            unit: null, // basse
        },
        {
            id: 'D2',
            location: 'D',
            los: [],
            unit: 'lee',
        },
        {
            id: 'D3',
            location: 'D',
            los: [],
            unit: 'worsham',
        },
        {
            id: 'D4',
            location: 'D',
            los: [],
            unit: null, // pollack
        },
        {
            id: 'D5',
            location: 'D',
            los: [],
            unit: 'sutton',
        },
        {
            id: 'D6',
            location: 'D',
            los: [],
            unit: 'petrukovich',
        },
        {
            id: 'D7',
            location: 'D6',
            los: [],
            unit: null, // steiner
        },
        {
            id: 'D8',
            location: 'D',
            los: [],
            unit: 'szymczyk',
        },
        {
            id: 'D9',
            location: 'D',
            los: [],
            unit: 'rushford',
        },
        {
            id: 'D10',
            location: 'D',
            los: [],
            unit: 'mchaley',
        },
        {
            id: 'D11',
            location: 'D',
            los: [],
            unit: 'schrader',
        },
        {
            id: 'D12',
            location: 'D',
            los: [],
            unit: 'gangl',
        },
        {
            id: 'D13',
            location: 'D',
            los: [],
            unit: 'dietrich',
        },
        {
            id: 'D14',
            location: 'D',
            los: [],
            unit: 'hockel',
        },
        {
            id: 'D15',
            location: 'D',
            los: [],
            unit: 'blechschmidt',
        },
        {
            id: 'D16',
            location: 'D',
            los: [],
            unit: 'rifleman1',
        },
        {
            id: 'D17',
            location: 'D',
            los: [],
            unit: 'rifleman2',
        },
        {
            id: 'D18',
            location: 'D',
            los: [],
            unit: 'rifleman3',
        },
        {
            id: 'D19',
            location: 'D',
            los: [],
            unit: 'rifleman4',
        },
        {
            id: 'D20',
            location: 'D',
            los: [],
            unit: 'rifleman5',
        },
        {
            id: 'R1',
            location: 'R',
            los: [],
            unit: 'wegscheider',
        },
        {
            id: 'R2',
            location: 'R',
            los: [],
            unit: 'linson',
        },
        {
            id: 'R3',
            location: 'R',
            los: [],
            unit: 'waltl',
        },
    ],
    tracks: { // enemy tracks
        2: {
            los: 'green',
            next: 13, 
            counter: {
                id: 'e9891108-8fe0-4849-a51e-91cc6778aace',
                type: 'RF',
                defense: 3,
            },
            suppress: ['machineGun'],
        },
        3: { 
            los: 'orange', 
            next: 13, 
            counter: {
                id: '709acd99-d56a-4f99-93c9-ee4c53223153',
                type: 'RF',
                defense: 3,
            }, 
            suppress: [],
        },
        4: {
            los: 'orange', 
            next: 15, 
            counter: {
                id: 'f10725b9-cf52-419f-9f9e-f661c5d2d8a6',
                type: 'RF',
                defense: 3,
            }, 
            suppress: ['mortar'],
        },
        5: {
            los: 'purple', 
            next: 18,
            counter: {
                id: '01a080c5-c093-4e8e-82d7-9413b44b1731',
                type: 'RF',
                defense: 3,
            },
            suppress: [],
        },
        6: {
            los: 'purple', 
            next: 20,
            counter: {
                id: '3b320fc7-3043-438e-9804-bd10958932c0',
                type: 'RF',
                defense: 3,
            },
            suppress: [],
        },
        7: {
            los: 'black', 
            next: 22,
            counter: {
                id: '2c5ecd47-95a4-492a-89d3-111cb4cc5c5f',
                type: 'RF',
                defense: 3,
            },
            suppress: [],
        },
        8: {
            los: 'black', 
            next: 26,
            counter: {
                id: 'd4bd4a2c-8906-403b-aa9a-ec385d625fd7',
                type: 'RF',
                defense: 3,
            },
            suppress: [],
        },
        9: {
            los: 'black', 
            next: 26,
            counter: {
                id: '1e17edb2-ded4-436d-8854-29c3ce11f323',
                type: 'RF',
                defense: 3,
            },
            suppress: [],
        },
        10: {
            los: 'black', 
            next: 28,
            counter: {
                id: '1223c0be-a8c0-4b4e-b352-8d2d07f8bff7',
                type: 'RF',
                defense: 3,
            },
            suppress: [],
        },
        11: {
            los: 'green', 
            next: 32,
            counter: {
                id: 'db4ddc22-ab91-456a-bab3-e75985f61597',
                type: 'RF',
                defense: 3,
            },
            suppress: [],
        },
        12: {
            los: 'green', 
            next: 32,
            counter: {
                id: 'a14289f2-0cff-4d44-aeef-57d2be48c10f',
                type: 'RF',
                defense: 3,
            },
            suppress: [],
        },
        13: {
            los: 'orange', 
            next: 14,
            counter: null, 
        },
        14: {
            los: 'orange', 
            next: 16,
            counter: null, 
        },
        15: {
            los: 'orange', 
            next: 14,
            counter: null, 
        },
        16: {
            los: 'orange', 
            next: 21,
            counter: null, 
        },
        17: {
            los: 'orange', 
            next: 16,
            counter: null, 
        },
        18: {
            los: 'orange', 
            next: 17,
            counter: null, 
        },
        19: {
            los: 'purple', 
            next: 17,
            counter: null, 
        },
        20: {
            los: 'purple', 
            next: 19,
            counter: null, 
        },
        21: {
            los: 'orange', 
            next: null,
            counter: null,
        },
        22: {
            los: 'yellow', 
            next: 23,
            counter: null,
        },
        23: {
            los: 'yellow', 
            next: 24,
            counter: null,
        },
        24: {
            los: 'yellow', 
            next: 25,
            counter: null,
        },
        25: {
            los: 'yellow', 
            next: null,
            counter: null,
        },
        26: {
            los: 'yellow', 
            next: 27,
            counter: null,
        },
        27: {
            los: 'yellow', 
            next: 24,
            counter: null,
        },
        28: {
            los: 'green', 
            next: 29,
            counter: null,
        },
        29: {
            los: 'green', 
            next: 30,
            counter: null,
        },
        30: {
            los: 'yellow', 
            next: 31,
            counter: null,
        },
        31: {
            los: 'yellow', 
            next: null,
            counter: null,
        },
        32: {
            los: 'green', 
            next: 30,
            counter: null,
        },
    },
    axisLOS: { // tiles axis units can target
        sniper: {
            1: 'black',
            2: 'black',
            3: 'green',
            4: 'yellow',
            5: 'orange',
            6: 'purple',
        },
        flak20: {
            1: 'purple',
            2: 'purple',
            3: 'purple',
            4: 'orange',
            5: 'orange',
            6: 'orange',
        },
        flak88: {
            1: 'K',
            2: 'K',
            3: 'GH',
            4: 'NT',
            5: 'NT',
            6: 'NT',
        },
        pak75a: {
            1: 'BJ',
            2: 'BJ',
            3: 'G',
            4: 'G',
            5: 'G',
            6: 'GH'
        },
        pak75b: {
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
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'MAP_LOADING':
        return {
            ...initialState,
        };
    case 'UPDATE_TILES':
        return {
            ...state,
            tiles: [...payload],
        };
    case 'REMOVE_UNIT':
        return {
            ...state,
            tiles: state.tiles.map(tile => {
                if (tile.id === payload) {
                    return {
                        ...tile,
                        unit: null,
                    }
                }
                return tile;
            }),
        };
    case 'ADD_UNIT':
        return {
            ...state,
            tiles: state.tiles.map(tile => {
                if (tile.id === payload.id) {
                    return {
                        ...tile,
                        unit: payload.unit,
                    }
                }
                return tile;
            }),
        };
    case 'UPDATE_TRACKS': {
        return {
            ...state,
            tracks: [...payload],
        };
    }
    default:
        return state;
    }
};

export default reducer;
