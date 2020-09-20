import store from '../../store';

const tiles = store.getState().map.tiles;
const friendlies = store.getState().units.friendly.units;

const sacrifice = (tileId) => {
    // get location of tile
    const location = tiles.find(tile => tile.id === tileId).location;

    // only one unit, 'gangl', can sacrifice, so check for him
    const hasGangl = tiles.find(tile => tile.unit === 'gangl' && tile.location === location).unit;

    if (hasGangl) {
        // gangl can be exhausted or disrupted and still sacrifice
        const gangl = friendlies.find(unit => unit.id === 'gangl' && !unit.kia);

        if (gangl) { 
            // send user option to sacrifice
            // await response
                // for this example, always sacrifice

            // update friendly units
            const payload = friendlies.map(unit => {
                if (unit.id === 'gangl') {
                    return {
                        ...unit,
                        kia: true,
                    };
                }
                return unit;
            });
            
            // update friendly units
            store.dispatch({ type: 'UPDATE_FRIENDLIES', payload });

            return true;
        }

        return false;
    }
    
    return false;
};

export default sacrifice;
