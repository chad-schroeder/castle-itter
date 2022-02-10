export const rules = {
    attack: [
        'A Defender must have LOS to an SS unit to take an Attack action.',
        'The Defender selects an SS counter that will be the target of the attack.',
        'The Defender will roll a number of dice equal to the Defener\'s Attack value and compare the results to the SS counter\'s defense value.',
        'If at least one of the dice rolled is equal to or exceeds the SS counter\'s defense value, the SS counter is eliminated.',  
    ],
    suppress: [
        'Add a number of suppression points, equal to the Defender\'s Suppress value, to the suppression pool on the board that matches the color of the combat position where the Defender is located.',
        'If a Defender can place multiple suppression points and is in a combat position with more than one color, the suppression points may be split across multiple suppresion pools.',
    ],
    move: [
        'A Defender may move to a new location by taking a Move action.',
        'The Defender cannot move into a combat position that is already occcupied.',
        'The locations do not have to be adjacent.',
    ],
    moveWithin: [
        'A Defender can use the Move Within action to change the combat position the unit occupies within the location and then take another action.',
        'If a Defender moves to a combat position that is already occupied, the two Defenders switch positions: however, to switch positions, neither of the Defenders can be Exhausted or have a Disrupted token.',
    ],
    recover: [
        'Defenders that are Exhausted or Disrupted cannot take an action.',
        'The Recover action allows a Defender to remove an Exhausted token or a Disrupted token.',
        'Remember: a Defender can only take one action each turn. Therefore, a Defender cannot take multiple Recover actions to remove both Exhausted and Disrupted tokens in the same turn.',
    ],
    command: [
        'Only Defenders with the Command ability can take the Command action.',
        'When a Defender uses the Command action, it can give three free Recover actions to Defenders in the same location.',
        'However, the Command action cannot be used to give a Recover action to a Defender that also has the Command ability.',
        'Furthermore, the Command action cannot be used on a Defender that has an Ordered token.',
        'Defenders which receive a Recover action from a Command are designated with a Command token.',
        'A Defender with a Command token cannot also take an action of their own during the turn.',
    ],
    escape: [
        'Only the Borotra Defender can use the Escape action.',
        'When Borotra begins his action in a combat position that has no SS counters in positions with corresponding colors, Borotra can take the Escape action.',
        'Borotra cannot escape from the Cellar or Great Hall.',
        'Borotra must begin his turn in the Southern (ST) or Northern Terrace (NT), the Keep (k), the Gatehouse (G), or Besotten Jenny (BJ) to take the Escape action.',
        'When Borotra escapes, his counter is removed from the board and the reinforcement 142nd Infantry Regiment card is shuffled into the deck.',
    ],
    inspire: [
        'Four of the French prisoner Defenders have the Inspire [I] attribute.',
        'A Defender with the Inspire attribute provides an additional die to any Defender in the same location that is taking an Attack action or an additional Suppression token to any Defender in the same location taking a Suppress action.',
        'To grant these benefits, the Defender with the Inspire attribute cannot be Exhausted or have a Disrupted token.',
    ],
    lowMorale: [
        'The five Rifleman Defenders all have the Low Morale [M] attribute.',
        'Any time a Defender in the same location as a Defender with the Low Morale attrbiute becomes a casualty, the Defender with the Low Morale attribute is also removed from the game board and treated as a casualty.',
    ],
    officer: [
        'Five of the Wehrmacht Defenders have the Officer [O] attribute.',
        'When a Defender with the Officer attribute is in the same location as a Rifleman with the Low Morale [M] attribute, ignore the effects of the Low Morale attribute.',
    ],
    sacrifice: [
        'One of the Defenders (Gangl) has the Sacrifice [S] attribute.',
        'If Gangl is in the same location as a French Defender with the Inspire [I] attribute, and the French Defender would become a casualty for any reason, you may remove Gangl from the game instead and ignore the casualty result for the French Defender.',
    ],
    tanker: [
        'Six of the Defenders have the Tanker [T] attribute.',
        'These Defenders may make use of the five special combat positions on the game board marked with a [T].',
        'Four of the combat positions are in the Besotten Jenny, while the fifth one is in the Gatehouse [G] location.',
    ],
    cellar: [
        'Defenders in the Cellar may only move to the Great Hall.', 
        'However, a Defender may move from any location into the Cellar.',
        'Reinforcement units may not be placed until the Reinforcements card is revealed.',
    ],
    reinforcements: [
        'Three of the Defenders have the Reinforcements [R] attribute.',
        'These units cannot enter play until the "Reinforcements" card is revealed.',
        'Unlike the beginning of the game, the player does not haave to place these reinforcements before taking actions with Defenders already on the board. Reinforcement units may stay in the Replacement pool for as long as the player chooses.',
    ],
    tankerPositions: {
        MGs: [
           'When a Defender with the Tanker [T] attribute is on a combat position marked M1919A4 or M2HB, the unit used the Attack/Suppress values listed on the board tile instead of their own.', 
        ],
        load: [
            'When a Defender with the Tanker [T] attribute is on the combat position marked 76mm Cannon Load, the unit may use the Load action.',
            'Note that the 76mm Cannon Load combat position is colored white and does not have LoS to any SS areas.',
        ],
        fire: [
            'When a Defender with the Tanker [T] attribute is on a combat position marked 76mm Cannon and the mapboard shows the Load token, the Defender uses the Attack/Suppress values of the combat position when resolving an Attack or Suppress action.',
            'Once fired, the Load token is removed from the map.',
        ],
    },
};

export const phases = {
    phase_deployment: {
        title: 'Deployment Phase',
        content: [
            'Units in the Deployment pool may be placed onto any vacant tile.', 
            'Once placed, the unit may take an action.',
            'Cellar units may not be activated until all units in the Deployment pool have been placed.',
            'Reinforcement units may not be placed until the Reinforcements card is revealed.',
        ],
    },
    phase_cellar: {
        title: 'Cellar units unlocked!',
        content: rules.cellar,
    },
    phase_reinforcement: {
        title: 'Reinforcements arrive!',
        content: [
            'Reinforcement units may be placed onto the map', 
            'Once placed, the unit may take an action.',
        ],
    },
    unit_borotra: {
        content: [
            'Only Borotra can attempt an escape.',
            'Borotra cannot escape from the Cellar or from X.',
            'Borotra cannot escape if currently Exhausted, Disrupted or Commanded.',
            'Borotra cannot escape if enemy units are on track colors matching Borotra\'s line-of-sight.',
        ]
    }
};



