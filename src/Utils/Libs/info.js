export const info = {
    active_deployment: 'Unit may be placed onto the map. Once placed, unit may take an action.',
    inactive_cellar: 'Cellar units may not be activated until all units in the Deployment pool have been placed.',
    inactive_deployment: 'Units on the map may not be activated again until all units in the Deployment pool have been placed.',
    inactive_reinforcement: 'Reinforcement units may not be placed until the Reinforcements card is revealed.',
    phase_cellar_title: 'Cellar Unlocked!',
    phase_cellar_activate: 'Cellar units may now move.',
    phase_cellar_conditon: 'Cellar units may only move to the Great Hall. Units in the Great Hall may move to the Cellar.',
    phase_deployment_title: 'Deployment Phase',
    phase_deployment_activate: 'Only units from the Deployment pool may be placed onto the map. Once placed, that unit may take an action.',
    phase_deployment_condition: 'Placed units may not be activated again until all units in the Deployment pool have been placed.',
    phase_reinforcement_title: 'Reinforcements Arrive!',
    phase_reinforcement_activate: 'Reinforcement units may be placed onto the map. Once placed, the Reinforcement unit may take an action.',
};

export const getPhaseInfo = (phase) => {
    switch(phase) {
        case 'Reinforcement':
            return {
                title: info['phase_reinforcement_title'],
                activate: info['phase_reinforcement_activate'],
            }
        case 'Cellar':
            return {
                title: info['phase_cellar_title'],
                activate: info['phase_cellar_activate'],
                condition: info['phase_cellar_condition'],
            }
        default: {
            return {
                title: info['phase_deployment_title'],
                activate: info['phase_deployment_activate'],
                condition: info['phase_deployment_condition'],
            }
        }
    }
};
