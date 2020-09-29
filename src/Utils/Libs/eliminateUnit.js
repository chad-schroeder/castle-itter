import store from '../../store';

export const eliminateUnit = unitId => {
    const { allied } = store.getState().units;

    // set unit to KIA
    const payload = allied.map(unit => {
        if (unit.id === unitId) {
            return {
                ...unit,
                kia: true,
            }
        }
        return unit;
    })

    // update units
    store.dispatch({ type: 'UNIT_KIA', payload });
};
