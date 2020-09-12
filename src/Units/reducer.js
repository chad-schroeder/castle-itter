const initialState = {
    allied: {
        combatants: [
            {
                id: 'basse',
                name: 'Basse',
                nationality: 'USA',
                location: 'Deployment',
                attack: 1,
                suppress: 2,
                modifiers: {
                    commander: true,
                    tanker: true,
                },
                exhausted: false,
                tokens: {
                    action: false,
                    command: false,
                }
            },
            {
                id: 'lee',
                name: 'Lee',
                nationality: 'USA',
                location: 'Deployment',
                attack: 1,
                suppress: 2,
                modifiers: {
                    commander: true,
                    tanker: true,
                },
                exhausted: false,
                tokens: {
                    action: false,
                    command: false,
                }
            },
            {
                id: 'worsham',
                name: 'Worsham',
                nationality: 'USA',
                location: 'Deployment',
                attack: 1,
                suppress: 1,
                exhausted: false,
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
                location: 'Deployment',
                attack: 2,
                suppress: 3,
                exhausted: false,
                tokens: {
                    action: false,
                    command: false,
                    disrupted: false,
                }
            },
            {
                id: 'steiner',
                name: 'Steiner',
                nationality: 'USA',
                location: 'Deployment',
                attack: 1,
                suppress: 2,
                modifiers: {
                    tanker: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 2,
                modifiers: {
                    tanker: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 2,
                modifiers: {
                    tanker: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 2,
                modifiers: {
                    commander: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 2,
                modifiers: {
                    commander: true,
                    officer: true,
                    sacrifice: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 1,
                modifiers: {
                    officer: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 1,
                modifiers: {
                    morale: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 1,
                modifiers: {
                    morale: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 1,
                modifiers: {
                    morale: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 1,
                modifiers: {
                    morale: true,
                },
                exhausted: false,
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
                location: 'Deployment',
                attack: 1,
                suppress: 1,
                modifiers: {
                    morale: true,
                },
                exhausted: false,
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
                location: 'Reinforcement',
                attack: 1,
                suppress: 2,
                modifiers: {
                    reinforcement: true,
                },
                exhausted: false,
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
                location: 'Reinforcement',
                attack: 1,
                suppress: 2,
                modifiers: {
                    reinforcement: true,
                },
                exhausted: false,
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
                location: 'Cellar',
                attack: 0,
                suppress: 1,
                modifiers: {
                    inspire: true,
                    prisoner: true,
                },
                exhausted: false,
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
                location: 'Cellar',
                attack: 0,
                suppress: 1,
                modifiers: {
                    inspire: true,
                    prisoner: true,
                },
                exhausted: false,
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
                location: 'Cellar',
                attack: 0,
                suppress: 1,
                modifiers: {
                    inspire: true,
                    prisoner: true,
                },
                exhausted: false,
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
                location: 'Cellar',
                attack: 0,
                suppress: 1,
                modifiers: {
                    inspire: true,
                    prisoner: true,
                },
                exhausted: false,
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
                location: 'Cellar',
                attack: 0,
                suppress: 1,
                modifiers: {
                    escape: true,
                    prisoner: true,
                },
                exhausted: false,
                tokens: {
                    action: false,
                    command: false,
                    disrupted: false,
                }
            },
        ],
        deploymentCount: 0,
        besottenJenny: {
            destroyed: false,
            casualties: 0,
        },
        kia: [],
    },
    axis: {
        combatants: {
            'Rifleman': {
                defense: 3,
                counter: true,
                decks: {
                    1: [],
                    2: [],
                    3: [],
                },
            },
            'Scout': {
                defense: 4,
                counter: true,
                decks: {
                    1: [],
                    2: [],
                    3: [],
                },
            },
            'Sturm': {
                defense: 5,
                counter: true,
                decks: {
                    1: [],
                    2: [],
                    3: [],
                },
            },
            'Sniper': {
                attack: 4,
                counter: false,
                disrupt: true,
                decks: {
                    1: [],
                    2: [],
                    3: [
                        {
                            targets: {
                                1: 'black',
                                2: 'black',
                                3: 'green',
                                4: 'yellow',
                                5: 'red',
                                6: 'purple',
                            },
                        },
                    ],
                },
            },
            'Machine Gunner': {
                attack: 2,
                defense: 4,
                counter: true,
                disrupted: true,
                decks: {
                    1: [],
                    2: [],
                    3: [],
                },
            },
            'Mortar': {
                attack: 3,
                defense: 4,
                counter: true,
                disrupted: true,
                decks: {
                    1: [],
                    2: [],
                    3: [],
                },
            },
            '20mm FLAK 30': {
                attack: 2,
                counter: false,
                disrupt: true,
                decks: {
                    1: [],
                    2: [],
                    3: [],
                },
            },
            '88mm FLAK 37': {
                attack: 5,
                counter: false,
                disrupt: true,
                decks: {
                    1: [],
                    2: [
                        {
                            targets: {
                                1: 'Keep',
                                2: 'Keep',
                                3: 'Great Hall',
                                4: 'North Terrace',
                                5: 'North Terrace',
                                6: 'North Terrace',
                            },
                        },
                    ],
                    3: [],
                },
            },
            '75mm PAK 40': {
                attack: 4,
                counter: false,
                decks: {
                    1: [],
                    2: [
                        {
                            targets: {
                                1: 'Keep',
                                2: 'Keep',
                                3: 'Great Hall',
                                4: 'South Terrace',
                                5: 'South Terrace',
                                6: 'South Terrace',
                            },
                        },
                    ],
                    3: [],
                },
            },
            'Panzerfaust': {
                attack: 4,
                counter: false,
                disrupt: true,
                decks: {
                    1: [],
                    2: [],
                    3: [
                        {
                            target: 'Besotten Jenny',
                        },
                    ],
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
    default:
        return state;
    }
};

export default reducer;
