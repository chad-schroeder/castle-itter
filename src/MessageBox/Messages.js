export const Messages = {
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
        content: [
            'Cellar units may only move to the Great Hall.', 
            'Units in the Great Hall may move to the Cellar.',
            'Reinforcement units may not be placed until the Reinforcements card is revealed.',
        ],
    },
    phase_reinforcements: {
        title: 'Reinforcements arrive!',
        content: [
            'Reinforcement units may be placed onto the map', 
            'Once placed, the unit may take an action.',
        ],
    },
    unit_borotra: {
        content: [
            'Only Borotra can attempt an escape',
            'Borotra cannot escape from the Cellar or from X',
            'Borotra cannot escape if currently Exhausted, Disrupted or Commanded',
            'Borotra cannot escape if enemy units are on track colors matching Borotra\'s line-of-sight',
        ]
    }
};
