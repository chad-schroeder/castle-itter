const initialState = {
    friendly: {
        units: [
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
    },
    enemy: {
        units: {
            RF: {
                name: 'Rifleman',
                type: 'rifleman',
                defense: 3,
                advance: true,
                decks: {
                    1: [2, 2, 2],
                    2: [2, 2, 2],
                    3: [3],
                    4: [2, 2, 3, 3],
                },
            },
            SC: {
                name: 'Scout',
                type: 'scout',
                defense: 4,
                advance: true,
                decks: {
                    1: [2, 2, 2],
                    2: [2, 2],
                },
            },
            ST: {
                name: 'Sturm',
                type: 'sturm',
                defense: 5,
                advance: true,
                decks: {
                    1: [1],
                    2: [1, 1],
                    3: [1, 2],
                    4: [1, 1, 2, 2],
                },
            },
            SF: {
                name: 'Suppressive Fire',
                type: 'sf',
                advance: false,
                disrupt: true,
                decks: {
                    2: 1,
                    3: 1,
                    4: 2,
                },
            },
            SN: {
                name: 'Sniper',
                type: 'sniper',
                attack: 4,
                advance: false,
                disrupt: true,
                target: {
                    1: 'black',
                    2: 'black',
                    3: 'green',
                    4: 'yellow',
                    5: 'red',
                    6: 'purple',
                },
                decks: {
                    2: 1,
                    3: 1,
                },
            },
            MG: {
                name: 'Machine Gunner',
                type: 'mg',
                attack: 2,
                defense: 4,
                advance: true,
                disrupted: true,
                decks: {
                    1: 1,
                    2: 2,
                    3: 1,
                    4: 1,
                },
            },
            MT: {
                name: 'Mortar',
                type: 'mortar',
                attack: 3,
                defense: 4,
                advance: true,
                disrupted: true,
                decks: {
                    1: 1,
                    2: 2,
                    3: 1,
                    4: 1,
                },
            },
            FL20: {
                name: '20mm FLAK 30',
                type: '20mm',
                attack: 2,
                advance: false,
                disrupt: true,
                target: {
                    1: 'purple',
                    2: 'purple',
                    3: 'purple',
                    4: 'red',
                    5: 'red',
                    6: 'red',
                },
                decks: {
                    2: 1,
                    3: 2,
                },
            },
            FL88: {
                name: '88mm FLAK 37',
                type: '88mm',
                attack: 5,
                advance: false,
                disrupt: true,
                target: {
                    1: 'K',
                    2: 'K',
                    3: 'GH',
                    4: 'NT',
                    5: 'NT',
                    6: 'NT',
                },
                decks: {
                    1: 1,
                    2: 1,
                    3: 2,
                },
            },
            PA75: { // TODO: figure out how to handle targeting on this one
                name: '75mm PAK 40',
                type: '75mm',
                attack: 4,
                advance: false,
                decks: {
                    1: [
                        {
                            target: {
                                1: 'BJ',
                                2: 'BJ',
                                3: 'G',
                                4: 'G',
                                5: 'G',
                                6: 'GH'
                            },
                        },
                        {
                            target: {
                                1: 'K',
                                2: 'K',
                                3: 'GH',
                                4: 'ST',
                                5: 'ST',
                                6: 'ST',
                            },
                        }
                    ],
                    2: [
                        {
                            target: {
                                1: 'K',
                                2: 'K',
                                3: 'GH',
                                4: 'ST',
                                5: 'ST',
                                6: 'ST',
                            },
                        },
                    ],
                    3: [
                        { 
                            target: {
                                1: 'K',
                                2: 'K',
                                3: 'GH',
                                4: 'ST',
                                5: 'ST',
                                6: 'ST',
                            },
                        },
                        {
                            target: {
                                1: 'BJ',
                                2: 'BJ',
                                3: 'G',
                                4: 'G',
                                5: 'G',
                                6: 'GH',
                            },
                        },
                        {
                            target: {
                                1: 'BJ',
                                2: 'BJ',
                                3: 'G',
                                4: 'G',
                                5: 'G',
                                6: 'GH',
                            },
                        },
                        {
                            target: {
                                1: 'K',
                                2: 'K',
                                3: 'GH',
                                4: 'ST',
                                5: 'ST',
                                6: 'ST',
                            },
                        },
                    ],
                },
            },
            Panzerfaust: {
                name: 'Panzerfaust',
                type: 'pf',
                attack: 4,
                advance: false,
                disrupt: true,
                decks: {
                    1: 0,
                    2: 2,
                    3: 2,
                },
            },
        },
        deployed: [],
        defeated: [],
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'RESET_UNITS':
        return {
            ...initialState,
        }
    case 'UPDATE_FRIENDLIES':
        return {
            ...state,
            friendly: {
                units: [...payload],
            },
        }
    default:
        return state;
    }
};

export default reducer;
