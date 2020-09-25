const initialState = {
    locations: [ // hero areas
        {
            id: 'NT',
            name: 'North Terrace',
            tiles: ['NT2', 'NT3', 'NT5', 'NT6'],
            canEspace: true,
            defense: 6,
        },
        {
            id: 'ST',
            name: 'South Terrace',
            tiles: ['ST2', 'ST4', 'ST5', 'ST6'],
            canEspace: true,
            defense: 6,
        },
        {
            id: 'K',
            name: 'Keep',
            tiles: ['K1', 'K2', 'K3', 'K4'],
            canEspace: true,
            defense: 6,
        },
        {
            id: 'GH',
            name: 'Great Hall',
            tiles: ['GH1', 'GH2', 'GH3', 'GH4'],
            canEspace: false,
            defense: 6,
        },
        {
            id: 'G',
            name: 'Gatehouse',
            tiles: ['G1', 'G2', 'G3', 'G4'],
            canEspace: true,
            defense: 6,
        },
        {
            id: 'BJ',
            name: 'Besotten Jenny',
            tiles: ['BJ1', 'BJ2', 'BJ3', 'BJ4'],
            canEspace: true,
            defense: 6,
        },
        {
            id: 'C',
            name: 'Cellar',
            tiles: ['C1', 'C2', 'C3', 'C4', 'C5'],
            canEspace: false,
            defense: 6,
        },
    ],
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
            unit: null,
        },
        {
            id: 'G3',
            location: 'G',
            los: ['black'],
            unit: null,
        },
        {
            id: 'G4',
            location: 'G',
            los: ['black'],
            unit: null,
            armament: {
                name: 'M13/A4',
                attack: 2,
                suppress: 3,
                tanker: true,
            }
        }, 
        {
            id: 'BJ1',
            location: 'BJ',
            los: [],
            unit: null, // 'steiner',
            armament: {
                name: '76mm Cannon Load',
                tanker: true,
            },
            destroyed: false,
        },
        {
            id: 'BJ2',
            location: 'BJ',
            los: ['black'],
            unit: null, // 'rushford',
            armament: {
                name: '76mm Cannon',
                attack: 4,
                suppress: 7,
                loaded: false,
                tanker: true,
            },
            destroyed: false,
        },
        {
            id: 'BJ3',
            location: 'BJ',
            los: ['black'],
            unit: null,
            armament: {
                name: 'M2HB',
                attack: 2,
                suppress: 4,
                tanker: true,
            },
            destroyed: false,
        },
        {
            id: 'BJ4',
            location: 'BJ',
            los: ['black'],
            unit: null,
            armament: {
                name: 'M1919A4',
                attack: 2,
                suppress: 3,
                tanker: true,
            },
            destroyed: false,
        },
        {
            id: 'C1',
            location: 'C',
            los: [],
            unit: 'Gamelin',
        },
        {
            id: 'C2',
            location: 'C',
            los: [],
            unit: 'Clemenceau',
        },
        {
            id: 'C3',
            location: 'C',
            los: [],
            unit: 'De La Rocque',
        },
        {
            id: 'C4',
            location: 'C',
            los: [],
            unit: 'Reynaud',
        },
        {
            id: 'C5',
            location: 'C',
            los: [],
            unit: 'Borotra',
        },
    ],
    tracks: { // enemy tracks
        2: {
            los: 'green',
            next: 13, 
            counter: {
                id: 789,
                type: 'scout',
                defense: 3,
            },
            mortar: 0, 
            mg: 0,
        },
        3: { 
            los: 'orange', 
            next: 13, 
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        4: {
            los: 'orange', 
            next: 15, 
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        5: {
            los: 'purple', 
            next: 18,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        6: {
            los: 'purple', 
            next: 20,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        7: {
            los: 'black', 
            next: 22,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        8: {
            los: 'black', 
            next: 26,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        9: {
            los: 'black', 
            next: 26,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        10: {
            los: 'black', 
            next: 28,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        11: {
            los: 'green', 
            next: 32,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        12: {
            los: 'green', 
            next: 32,
            counter: null, 
            mortar: 0, 
            mg: 0,
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
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'MAP_LOADING':
        return {
            ...initialState,
        };
    case 'RESET_MAP_SPACES':
        return {
            ...initialState,
        };
    case 'DESTROY_BESOTTEN_JENNY': {
        return {
            ...state,
            tiles: [...payload],
        };
    }
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
