const initialState = {
    locations: { // Defender locales
        NT: {
            id: 'NT',
            name: 'North Terrace',
            tiles: ['NT2', 'NT3', 'NT5', 'NT6'],
            defense: 6,
        },
        ST: {
            id: 'ST',
            name: 'South Terrace',
            tiles: ['ST2', 'ST4', 'ST5', 'ST6'],
            defense: 6,
        },
        K: {
            id: 'K',
            name: 'Keep',
            tiles: ['K1', 'K2', 'K3', 'K4'],
            defense: 6,

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
        },
    },
    tiles: [ // Defender tiles
        {
            id: 'NT2',
            location: 'NT',
            los: ['purple'],
        },
        {
            id: 'NT3',
            location: 'NT',
            los: ['purple'],
        },
        {
            id: 'NT5',
            location: 'NT',
            los: ['purple', 'yellow'],
        },
        {
            id: 'NT6',
            location: 'NT',
            los: ['purple', 'orange'],
        },
        {
            id: 'ST2',
            location: 'ST',
            los: ['green'],
        },
        {
            id: 'ST4',
            location: 'ST',
            los: ['green'],
        },
        {
            id: 'ST5',
            location: 'ST',
            los: ['green', 'orange'],
        },
        {
            id: 'ST6',
            location: 'ST',
            los: ['green', 'yellow'],
        },
        {
            id: 'K1',
            location: 'K',
            los: ['orange'],
        },
        {
            id: 'K2',
            location: 'K',
            los: ['orange'],
        },
        {
            id: 'K3',
            location: 'K',
            los: ['orange', 'green'],
        },
        {
            id: 'K4',
            location: 'K',
            los: ['orange', 'purple'],
        },
        {
            id: 'GH1',
            location: 'GH',
            los: ['purple'],
        },
        {
            id: 'GH2',
            location: 'GH',
            los: ['green'],
        },
        {
            id: 'GH3',
            location: 'GH',
            los: ['yellow'],
        },
        {
            id: 'GH4',
            location: 'GH',
            los: ['yellow'],
        },
        {
            id: 'G1',
            location: 'G',
            los: ['yellow', 'black'],
        },
        {
            id: 'G2',
            location: 'G',
            los: ['yellow', 'black'],
        },
        {
            id: 'G3',
            location: 'G',
            los: ['black'],
        },
        {
            id: 'G4',
            location: 'G',
            los: ['black'],
            armament: {
                name: 'M13/A4',
                attack: 2,
                suppress: 3,
            }
        }, 
        {
            id: 'BJ1',
            location: 'BJ',
            armament: {
                name: '76mm: Load',
                load: true,
            },
        },
        {
            id: 'BJ2',
            location: 'BJ',
            los: ['black'],
            armament: {
                name: '76mm: Fire',
                attack: 4,
                suppress: 7,
            },
        },
        {
            id: 'BJ3',
            location: 'BJ',
            los: ['black'],
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
            armament: {
                name: 'M1919A4',
                attack: 2,
                suppress: 3,
            },
        },
        {
            id: 'C1',
            location: 'C',
        },
        {
            id: 'C2',
            location: 'C',
        },
        {
            id: 'C3',
            location: 'C',
        },
        {
            id: 'C4',
            location: 'C',
        },
        {
            id: 'C5',
            location: 'C',
        },
    ],
    tracks: [ // Axis tracks
        {
            id: 2,
            los: 'green',
            next: 13, 
            counter: {
                id: 'e9891108-8fe0-4849-a51e-91cc6778aace',
                name: 'Rifleman',
                defense: 3,
            },
            suppress: ['machineGun'],
        },
        { 
            id: 3,
            los: 'orange', 
            next: 13, 
            counter: {
                id: '709acd99-d56a-4f99-93c9-ee4c53223153',
                name: 'Rifleman',
                defense: 3,
            }, 
            suppress: [],
        },
        {
            id: 4,
            los: 'orange', 
            next: 15, 
            counter: {
                id: 'f10725b9-cf52-419f-9f9e-f661c5d2d8a6',
                name: 'Rifleman',
                defense: 3,
            }, 
            suppress: ['mortar'],
        },
        {
            id: 5,
            los: 'purple', 
            next: 18,
            counter: {
                id: '01a080c5-c093-4e8e-82d7-9413b44b1731',
                name: 'Rifleman',
                defense: 3,
            },
            suppress: [],
        },
        {
            id: 6,
            los: 'purple', 
            next: 20,
            counter: {
                id: '3b320fc7-3043-438e-9804-bd10958932c0',
                name: 'Rifleman',
                defense: 3,
            },
            suppress: [],
        },
        {
            id: 7,
            los: 'black', 
            next: 22,
            counter: {
                id: '2c5ecd47-95a4-492a-89d3-111cb4cc5c5f',
                name: 'Rifleman',
                defense: 3,
            },
            suppress: [],
        },
        {
            id: 8,
            los: 'black', 
            next: 26,
            counter: {
                id: 'd4bd4a2c-8906-403b-aa9a-ec385d625fd7',
                name: 'Rifleman',
                defense: 3,
            },
            suppress: [],
        },
        {
            id: 9,
            los: 'black', 
            next: 26,
            counter: {
                id: '1e17edb2-ded4-436d-8854-29c3ce11f323',
                name: 'Rifleman',
                defense: 3,
            },
            suppress: [],
        },
        {
            id: 10,
            los: 'black', 
            next: 28,
            counter: {
                id: '1223c0be-a8c0-4b4e-b352-8d2d07f8bff7',
                name: 'Rifleman',
                defense: 3,
            },
            suppress: [],
        },
        {
            id: 11,
            los: 'green', 
            next: 32,
            counter: {
                id: 'db4ddc22-ab91-456a-bab3-e75985f61597',
                name: 'Rifleman',
                defense: 3,
            },
            suppress: [],
        },
        {
            id: 12,
            los: 'green', 
            next: 32,
            counter: {
                id: 'a14289f2-0cff-4d44-aeef-57d2be48c10f',
                name: 'Rifleman',
                defense: 3,
            },
            suppress: [],
        },
        {
            id: 13,
            los: 'orange', 
            next: 14,
            counter: null, 
        },
        {
            id: 14,
            los: 'orange', 
            next: 16,
            counter: null, 
        },
        {
            id: 15,
            los: 'orange', 
            next: 14,
            counter: null, 
        },
        {
            id: 16,
            los: 'orange', 
            next: 21,
            counter: null, 
        },
        {
            id: 17,
            los: 'orange', 
            next: 16,
            counter: null, 
        },
        {
            id: 18,
            los: 'orange', 
            next: 17,
            counter: null, 
        },
        {
            id: 19,
            los: 'purple', 
            next: 17,
            counter: null, 
        },
        {
            id: 20,
            los: 'purple', 
            next: 19,
            counter: null, 
        },
        {
            id: 21,
            los: 'orange', 
            next: null,
            counter: null,
        },
        {
            id: 22,
            los: 'yellow', 
            next: 23,
            counter: null,
        },
        {   
            id: 23,
            los: 'yellow', 
            next: 24,
            counter: null,
        },
        {
            id: 24,
            los: 'yellow', 
            next: 25,
            counter: null,
        },
        {
            id: 25,
            los: 'yellow', 
            next: null,
            counter: null,
        },
        {
            id: 26,
            los: 'yellow', 
            next: 27,
            counter: null,
        },
        {
            id: 27,
            los: 'yellow', 
            next: 24,
            counter: null,
        },
        {
            id: 28,
            los: 'green', 
            next: 29,
            counter: null,
        },
        {
            id: 29,
            los: 'green', 
            next: 30,
            counter: null,
        },
        {
            id: 30,
            los: 'yellow', 
            next: 31,
            counter: null,
        },
        {
            id: 31,
            los: 'yellow', 
            next: null,
            counter: null,
        },
        {
            id: 32,
            los: 'green', 
            next: 30,
            counter: null,
        },
    ],
    axisLOS: { // zones Axis units can target
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
    case 'UPDATE_TRACKS': 
        return {
            ...state,
            tracks: [
                ...state.tracks,
                ...payload
            ],
        }
    default:
        return state;
    }
};

export default reducer;
