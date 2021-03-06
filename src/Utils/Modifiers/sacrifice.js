import store from '../../store';

const { tiles } = store.getState().map;
const { allies } = store.getState().units;

const sacrifice = (tileId) => {
    // get location of tile
    const location = tiles.find(tile => tile.id === tileId).location;

    // only one unit, 'gangl', can sacrifice, so check for him
    const hasGangl = tiles.find(tile => tile.unit === 'gangl' && tile.location === location).unit;

    if (hasGangl) {
        // gangl can be exhausted or disrupted and still sacrifice
        const gangl = allies.find(unit => unit.id === 'gangl' && !unit.casualty);

        if (gangl) { 
            // send user option to sacrifice
            // await response
                // for this example, always sacrifice

            const payload = allies.map(unit => {
                if (unit.id === 'gangl') {
                    return {
                        ...unit,
                        casualty: true,
                    };
                }
                return unit;
            });
            
            // update allies
            store.dispatch({ type: 'UPDATE_ALLIES', payload });

            return true;
        }

        return false;
    }
    
    return false;
};

export default sacrifice;
