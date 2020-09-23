const initialState = {
    locations: [
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
    tiles: [
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
    colors: {
        orange: ['K1', 'K2', 'K3', 'K4', 'ST5', 'NT6'],
        purple: ['GH1', 'NT2', 'NT3', 'K4', 'NT5', 'NT6'],
        green: ['GH1', 'ST2', 'K3', 'ST4', 'ST5', 'ST6'],
        yellow: ['G1', 'G2', 'GH3', 'GH4', 'NT5', 'ST6'],
        black: ['G1', 'G2', 'G3', 'G4', 'G4', 'G4'],
    },
    circles: [
        {
            id: 2,
            los: 'green',
            nextNode: 13, 
            infantry: null, 
            mortar: null, 
            mg: null,
        },
        { 
            id: 3,
            los: 'orange', 
            nextNode: 13, 
            infantry: null, 
            mortar: null, 
            mg: null 
        },
        {
            id: 4,
            nextNode: 15, 
            los: 'orange', 
            infantry: null, 
            mortar: null, 
            mg: null
        },
        {
            id: 5,
            nextNode: 18,
            los: 'purple', 
            infantry: null, 
            mortar: null, 
            mg: null 
        },
        {
            id: 6,
            nextNode: 20,
            los: 'purple', 
            infantry: null, 
            mortar: null, 
            mg: null 
        },
        {
            id: 7,
            nextNode: 22,
            los: 'black', 
            infantry: null, 
            mortar: null, 
            mg: null 
        },
        {
            id: 8,
            nextNode: 26,
            los: 'black', 
            infantry: null, 
            mortar: null, 
            mg: null 
        },
        {
            id: 9,
            nextNode: 26,
            los: 'black', 
            infantry: null, 
            mortar: null, 
            mg: null 
        },
        {
            id: 10,
            nextNode: 28,
            los: 'black', 
            infantry: null, 
            mortar: null, 
            mg: null 
        },
        {
            id: 11,
            nextNode: 32,
            los: 'green', 
            infantry: null, 
            mortar: null, 
            mg: null 
        },
        {
            id: 12,
            nextNode: 32,
            los: 'green', 
            infantry: null, 
            mortar: null, 
            mg: null 
        },
        {
            id: 13,
            nextNode: 14,
            los: 'orange', 
            infantry: null, 
        },
        {
            id: 14,
            nextNode: 16,
            los: 'orange', 
            infantry: null, 
        },
        {
            id: 15,
            nextNode: 14,
            los: 'orange', 
            infantry: null, 
        },
        {
            id: 16,
            nextNode: 21,
            los: 'orange', 
            infantry: null, 
        },
        {
            id: 17,
            nextNode: 16,
            los: 'orange', 
            infantry: null, 
        },
        {
            id: 18,
            nextNode: 17,
            los: 'orange', 
            infantry: null, 
        },
        {
            id: 19,
            nextNode: 17,
            los: 'purple', 
            infantry: null, 
        },
        {
            id: 20,
            nextNode: 19,
            los: 'purple', 
            infantry: null, 
        },
        {
            id: 21,
            nextNode: 0,
            los: 'orange', 
            infantry: null,
        },
        {
            id: 22,
            nextNode: 23,
            los: 'yellow', 
            infantry: null,
        },
        {
            id: 23,
            nextNode: 24,
            los: 'yellow', 
            infantry: null,
        },
        {
            id: 24,
            nextNode: 25,
            los: 'yellow', 
            infantry: null,
        },
        {
            id: 25,
            nextNode: 0,
            los: 'yellow', 
            infantry: null,
        },
        {
            id: 26,
            nextNode: 27,
            los: 'yellow', 
            infantry: null,
        },
        {
            id: 27,
            nextNode: 24,
            los: 'yellow', 
            infantry: null,
        },
        {
            id: 28,
            nextNode: 29,
            los: 'green', 
            infantry: null,
        },
        {
            id: 29,
            nextNode: 30,
            los: 'green', 
            infantry: null,
        },
        {
            id: 30,
            nextNode: 31,
            los: 'yellow', 
            infantry: null,
        },
        {
            id: 31,
            nextNode: 0,
            los: 'yellow', 
            infantry: null,
        },
        {
            id: 32,
            nextNode: 30,
            los: 'green', 
            infantry: null,
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
    default:
        return state;
    }
};

export default reducer;
