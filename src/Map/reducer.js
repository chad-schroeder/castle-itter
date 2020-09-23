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
            unit: null, // 'hockel'
        },
        {
            id: 'NT3',
            location: 'NT',
            los: ['purple'],
            unit: 'clemenceau',
        },
        {
            id: 'NT5',
            location: 'NT',
            los: ['purple', 'yellow'],
            unit: 'rifleman1',
        },
        {
            id: 'NT6',
            location: 'NT',
            los: ['purple', 'orange'],
            unit: 'gangl',
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
            unit: 'steiner',
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
            unit: 'rushford',
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
    colors: { // enemy targeting
        orange: ['K1', 'K2', 'K3', 'K4', 'ST5', 'NT6'],
        purple: ['GH1', 'NT2', 'NT3', 'K4', 'NT5', 'NT6'],
        green: ['GH1', 'ST2', 'K3', 'ST4', 'ST5', 'ST6'],
        yellow: ['G1', 'G2', 'GH3', 'GH4', 'NT5', 'ST6'],
        black: ['G1', 'G2', 'G3', 'G4', 'G4', 'G4'],
    },
    tracks: [ // enemy tracks
        {
            id: 2,
            los: 'green',
            nextNode: 13, 
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        { 
            id: 3,
            los: 'orange', 
            nextNode: 13, 
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 4,
            los: 'orange', 
            nextNode: 15, 
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 5,
            los: 'purple', 
            nextNode: 18,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 6,
            los: 'purple', 
            nextNode: 20,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 7,
            los: 'black', 
            nextNode: 22,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 8,
            los: 'black', 
            nextNode: 26,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 9,
            los: 'black', 
            nextNode: 26,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 10,
            los: 'black', 
            nextNode: 28,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 11,
            los: 'green', 
            nextNode: 32,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 12,
            los: 'green', 
            nextNode: 32,
            counter: null, 
            mortar: 0, 
            mg: 0,
        },
        {
            id: 13,
            los: 'orange', 
            nextNode: 14,
            counter: null, 
        },
        {
            id: 14,
            los: 'orange', 
            nextNode: 16,
            counter: null, 
        },
        {
            id: 15,
            los: 'orange', 
            nextNode: 14,
            counter: null, 
        },
        {
            id: 16,
            los: 'orange', 
            nextNode: 21,
            counter: null, 
        },
        {
            id: 17,
            los: 'orange', 
            nextNode: 16,
            counter: null, 
        },
        {
            id: 18,
            los: 'orange', 
            nextNode: 17,
            counter: null, 
        },
        {
            id: 19,
            los: 'purple', 
            nextNode: 17,
            counter: null, 
        },
        {
            id: 20,
            los: 'purple', 
            nextNode: 19,
            counter: null, 
        },
        {
            id: 21,
            los: 'orange', 
            nextNode: null,
            counter: null,
        },
        {
            id: 22,
            los: 'yellow', 
            nextNode: 23,
            counter: null,
        },
        {
            id: 23,
            los: 'yellow', 
            nextNode: 24,
            counter: null,
        },
        {
            id: 24,
            los: 'yellow', 
            nextNode: 25,
            counter: null,
        },
        {
            id: 25,
            los: 'yellow', 
            nextNode: null,
            counter: null,
        },
        {
            id: 26,
            los: 'yellow', 
            nextNode: 27,
            counter: null,
        },
        {
            id: 27,
            los: 'yellow', 
            nextNode: 24,
            counter: null,
        },
        {
            id: 28,
            los: 'green', 
            nextNode: 29,
            counter: null,
        },
        {
            id: 29,
            los: 'green', 
            nextNode: 30,
            counter: null,
        },
        {
            id: 30,
            los: 'yellow', 
            nextNode: 31,
            counter: null,
        },
        {
            id: 31,
            los: 'yellow', 
            nextNode: null,
            counter: null,
        },
        {
            id: 32,
            los: 'green', 
            nextNode: 30,
            counter: null,
        },
    ],
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
