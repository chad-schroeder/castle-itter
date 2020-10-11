import store from '../../store';

const destroyBesottenJenny = () => {
    const { tiles } = store.getState().map;

    const casualties = tiles
        .filter(tile => tile.location === 'BJ' && tile.unit)
        .map(tile => tile.unit);

    console.log('Besotten Jenny destroyed', casualties);
    store.dispatch({ type: 'DESTROY_BESOTTEN_JENNY', payload: casualties });
};

export default destroyBesottenJenny;
