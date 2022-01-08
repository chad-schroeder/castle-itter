const initialState = {
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
            location: 'D',
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
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'UPDATE_TILES':
        return {
            ...state,
            tiles: [...payload],
        };
    default:
        return state;
    }
};

export default reducer;
