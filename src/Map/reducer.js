const initialState = {
    locations: {
        'North Terrace': {
            canEspace: true,
            spaces: {
                'NT2': {
                    los: ['purple'],
                },
                'NT3': {
                    los: ['purple'],
                },
                'NT5': {
                    los: ['purple', 'yellow'],
                },
                'NT6': {
                    los: ['purple', 'red'],
                },
            },
            stability: 6,
        },
        'South Terrace': {
            canEspace: true,
            spaces: {
                'ST2': {
                    los: ['green'],
                },
                'ST4': {
                    los: ['green'],
                },
                'ST5': {
                    los: ['green', 'red'],
                },
                'ST6': {
                    los: ['green', 'yellow'],
                },
            },
            stability: 6,
        },
        'Keep': {
            canEspace: true,
            spaces: {
                'K1': {
                    los: ['red'],
                },
                'K2': {
                    los: ['red'],
                },
                'K3': {
                    los: ['red', 'green'],
                },
                'K4': {
                    los: ['red', 'purple'],
                },
            },
            stability: 6,
        },
        'Great Hall': {
            canEspace: false,
            spaces: {
                'GH1p': {
                    los: ['purple'],
                },
                'GH1g': {
                    los: ['green'],
                },
                'GH3': {
                    los: ['yellow'],
                },
                'GH4': {
                    los: ['yellow'],
                },
            },
            stability: 6,
        },
        'Gate House': {
            canEspace: true,
            spaces: {
                'G1': {
                    los: ['yellow', 'black'],
                },
                'G2': {
                    los: ['yellow', 'black'],
                },
                'G3': {
                    los: ['black'],
                },
                'G4': {
                    los: ['black'],
                    armament: {
                        name: 'M13/A4',
                        attack: 2,
                        suppress: 3,
                        tanker: true,
                    }
                },
            },
            stability: 6,
        },
        'Besotten Jenny': {
            canEspace: true,
            spaces: {
                'BJ1': {
                    los: ['black'],
                    armament: {
                        name: '76mm Cannon Load',
                        tanker: true,
                    }
                },
                'BJ2': {
                    los: ['black'],
                    armament: {
                        name: '76mm Cannon',
                        attack: 4,
                        suppress: 7,
                        loaded: false,
                        tanker: true,
                    },
                },
                'BJ3': {
                    los: ['black'],
                    armament: {
                        name: 'M2HB',
                        attack: 2,
                        suppress: 4,
                        tanker: true,
                    },
                },
                'BJ4': {
                    los: ['black'],
                    armament: {
                        name: 'M1919A4',
                        attack: 2,
                        suppress: 3,
                        tanker: true,
                    },
                },
            },
            stability: 6,
        },
        'Cellar': {
            canEspace: false,
            spaces: {
                'C1': {
                    los: [],
                },
                'C2': {
                    los: [],
                },
                'C3': {
                    los: [],
                },
                'C4': {
                    los: [],
                },
                'C5': {
                    los: [],
                },
            },
            stability: 6,
        },
    },
    locations: ['North Terrace', 'South Terrace', 'Keep', 'Great Hall', 'Gatehouse', 'Besotten Jeny', 'Cellar'],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'MAP_LOADING':
        return {
            ...initialState,
        };
    case 'UPDATE_MAP_SPACES':
        return {
            ...initialState,
            spaces: ['d1'],
        }
    case 'RESET_MAP_SPACES':
        return {
            ...initialState,
        }
    default:
        return state;
    }
};

export default reducer;
