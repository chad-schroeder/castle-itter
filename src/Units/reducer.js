const initialState = {
    allies: [
        {
            id: 'basse',
            name: 'Basse',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 2,
            modifiers: {
                commander: true,
                tanker: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'lee',
            name: 'Lee',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 2,
            modifiers: {
                commander: true,
                tanker: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'worsham',
            name: 'Worsham',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'pollack',
            name: 'Pollack',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 2,
            suppress: 3,
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'sutton',
            name: 'Sutton',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'petrukovich',
            name: 'Petrukovich',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'seiner',
            name: 'Seiner',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 2,
            modifiers: {
                tanker: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'szymczyk',
            name: 'Szymczyk',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 2,
            modifiers: {
                tanker: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'rushford',
            name: 'Rushford',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 2,
            modifiers: {
                tanker: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'mchaley',
            name: 'McHaley',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 2,
            modifiers: {
                tanker: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'schrader',
            name: 'Schrader',
            nationality: 'SS',
            placement: 'Deployment',
            attack: 1,
            suppress: 2,
            modifiers: {
                commander: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'gangl',
            name: 'Gangl',
            nationality: 'GER',
            placement: 'Deployment',
            attack: 1,
            suppress: 2,
            modifiers: {
                commander: true,
                officer: true,
                sacrifice: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'dietrich',
            name: 'Dietrich',
            nationality: 'GER',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            modifiers: {
                officer: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'hockel',
            name: 'Hockel',
            nationality: 'GER',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            modifiers: {
                officer: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'blechschmidt',
            name: 'Blechschmidt',
            nationality: 'GER',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            modifiers: {
                officer: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'rifleman1',
            name: 'Rifleman',
            nationality: 'GER',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            modifiers: {
                morale: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'rifleman2',
            name: 'Rifleman',
            nationality: 'GER',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            modifiers: {
                morale: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'rifleman3',
            name: 'Rifleman',
            nationality: 'GER',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            modifiers: {
                morale: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'rifleman4',
            name: 'Rifleman',
            nationality: 'GER',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            modifiers: {
                morale: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'rifleman5',
            name: 'Rifleman',
            nationality: 'GER',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            modifiers: {
                morale: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'linson',
            name: 'Linson',
            nationality: 'GER',
            placement: 'Reinforcement',
            attack: 1,
            suppress: 2,
            modifiers: {
                reinforcement: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'wegscheider',
            name: 'Wegscheider',
            nationality: 'GER',
            placement: 'Reinforcement',
            attack: 1,
            suppress: 2,
            modifiers: {
                officer: true,
                reinforcement: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'waltl',
            name: 'Waltl',
            nationality: 'AUS',
            placement: 'Reinforcement',
            attack: 1,
            suppress: 2,
            modifiers: {
                reinforcement: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'clemenceau',
            name: 'Clemenceau',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                inspire: true,
                prisoner: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'gamelin',
            name: 'Gamelin',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                inspire: true,
                prisoner: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'rocque',
            name: 'De La Rocque',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                inspire: true,
                prisoner: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'reynaud',
            name: 'Reynaud',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                inspire: true,
                prisoner: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
        {
            id: 'borotra',
            name: 'Borotra',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                escape: true,
                prisoner: true,
            },
            exhausted: false,
            kia: false,
            tokens: {
                action: false,
                command: false,
                disrupted: false,
            }
        },
    ],
    axis: {
        rifleman: {
            id: 'rifleman',
            name: 'Rifleman',
            defense: 3,
            counter: true,
            canAdvance: true,
        },
        scout: {
            id: 'scout',
            name: 'Scout',
            defense: 4,
            counter: true,
            canAdvance: true,
        },
        sturm: {
            id: 'sturm',
            name: 'Sturm',
            defense: 5,
            counter: true,
            canAdvance: true,
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
            disrupted: true,
        },
        mortar: {
            id: 'mortar',
            name: 'Mortar',
            attack: 3,
            defense: 4,
            counter: true,
            disrupted: true,
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
        },
        panzerfaust: {
            id: 'pf',
            name: 'Panzerfaust',
            attack: 4,
            disrupt: true,
        },
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'RESET_UNITS':
        return {
            ...initialState,
        };
    case 'UPDATE_ALLIES':
        return {
            ...state,
            allies: [...payload],
        };
    default:
        return state;
    }
};

export default reducer;
