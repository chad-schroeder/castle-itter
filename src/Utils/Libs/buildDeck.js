import { v4 as uuidv4 } from 'uuid'; // uuidv4()

import store from '../../store';

const buildDeck = () => {
    const enemies = store.getState().units.enemy.units;
    const deck = [];

    // individual decks
    let d1 = [];
    let d2 = [];
    let d3 = [];
    let d4 = [];

    // riflemen
    const riflemen = enemies.RF;

    /*
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
    */

    return deck;
};

export default buildDeck;

