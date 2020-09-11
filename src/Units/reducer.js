const initialState = {
    allied: {
        combatants: {
            'Basse': {
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
                    suppressiveed: false,
                }
            },
            'Lee': {
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
                    suppressiveed: false,
                }
            },
            'Worsham': {
                name: 'Worsham',
                nationality: 'USA',
                location: 'Deployment',
                attack: 1,
                suppress: 1,
                exhausted: false,
                tokens: {
                    action: false,
                    command: false,
                    suppressiveed: false,
                }
            },
            'Pollock': {
                name: 'Pollack',
                nationality: 'USA',
                location: 'Deployment',
                attack: 2,
                suppress: 3,
                exhausted: false,
                tokens: {
                    action: false,
                    command: false,
                    suppressiveed: false,
                }
            },
            'Steiner': {
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
                    suppressiveed: false,
                }
            },
            'Szymczyk': {
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
                    suppressiveed: false,
                }
            },
            'Rushford': {
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
                    suppressiveed: false,
                }
            },
            'Schrader': {
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
                    suppressiveed: false,
                }
            },
            'Gangl': {
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
                    suppressiveed: false,
                }
            },
            'Dietrich': {
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
                    suppressiveed: false,
                }
            },
            'RF1': {
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
                    suppressiveed: false,
                }
            },
            'RF2': {
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
                    suppressiveed: false,
                }
            },
            'RF3': {
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
                    suppressiveed: false,
                }
            },
            'RF4': {
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
                    suppressiveed: false,
                }
            },
            'RF5': {
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
                    suppressiveed: false,
                }
            },
            'Linson': {
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
                    suppressiveed: false,
                }
            },
            'Waltl': {
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
                    suppressiveed: false,
                }
            },
            'Clemenceau': {
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
                    suppressiveed: false,
                }
            },
            'Gamelin': {
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
                    suppressiveed: false,
                }
            },
            'De La Rocque': {
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
                    suppressiveed: false,
                }
            },
            'Reynaud': {
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
                    suppressiveed: false,
                }
            },
            'Borotra': {
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
                    suppressiveed: false,
                }
            },
        },
        deploymentCount: 0,
        besottenJenny: {
            destroyed: false,
            defendersKia: 0,
        },
        escaped: false,
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
                suppressive: true,
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
                suppressive: true,
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
