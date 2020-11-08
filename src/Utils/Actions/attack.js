import store from '../../store';

const { allies } = store.getState().units;

export const canAttack = unitId => {
    const unit = allies[unitId];
    if (unit.exhausted || unit.tokens.length) return false;
    return true;
};

const getAttackValue = (unitId, armament = null) => {
    const { attack, tanker } = allies[unitId];

    // if tanker unit and tile has increased firepower, use that firepower
    if (tanker && armament) {
        return armament.attack;
    }
    
    return attack;
};

export const actionAttack = (unitId, los, armament) => {
    const attackValue = getAttackValue(unitId, armament);

    // TODO: highlight all enemy tracks within line of sight
};
