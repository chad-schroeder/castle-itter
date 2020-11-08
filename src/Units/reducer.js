const initialState = {
    allies: {
        basse: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        lee: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        worsham: {
            id: 'worsham',
            name: 'Worsham',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        pollack: {
            id: 'pollack',
            name: 'Pollack',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 2,
            suppress: 3,
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        sutton: {
            id: 'sutton',
            name: 'Sutton',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        petrukovich: {
            id: 'petrukovich',
            name: 'Petrukovich',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 1,
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        steiner: {
            id: 'steiner',
            name: 'Steiner',
            nationality: 'USA',
            placement: 'Deployment',
            attack: 1,
            suppress: 2,
            modifiers: {
                tanker: true,
            },
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        szymczyk: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        rushford: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        mchaley: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        schrader: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        gangl: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        dietrich: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        hockel: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        blechschmidt: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        rifleman1: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        rifleman2: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        rifleman3: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        rifleman4: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        rifleman5: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        linson: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        wegscheider: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        waltl: {
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
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        clemenceau: {
            id: 'clemenceau',
            name: 'Clemenceau',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                inspire: true,
            },
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        gamelin: {
            id: 'gamelin',
            name: 'Gamelin',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                inspire: true,
            },
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        rocque: {
            id: 'rocque',
            name: 'De La Rocque',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                inspire: true,
            },
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        reynaud: {
            id: 'reynaud',
            name: 'Reynaud',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                inspire: true,
            },
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
        borotra: {
            id: 'borotra',
            name: 'Borotra',
            nationality: 'FRA',
            placement: 'Cellar',
            attack: 0,
            suppress: 1,
            modifiers: {
                escape: true,
            },
            exhausted: false,
            casualty: false,
            tokens: {
                tookAction: false,
                commanded: false,
                disrupted: false,
            }
        },
    },
    axis: {
        rifleman: {
            id: 'rifleman',
            name: 'Rifleman',
            defense: 3,
            counter: true,
        },
        scout: {
            id: 'scout',
            name: 'Scout',
            defense: 4,
            counter: true,
        },
        sturm: {
            id: 'sturm',
            name: 'Sturm',
            defense: 5,
            counter: true,
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
