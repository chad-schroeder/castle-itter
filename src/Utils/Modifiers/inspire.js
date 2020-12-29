export const getLocalUnits = (locationTiles = [], tiles = [], skipId = null) => {
    const allies = tiles
        .filter(tile => 
            locationTiles.includes(tile.id) 
            && tile.unit 
            && tile.unit !== skipId)
        .map(tile => tile.unit);

    return allies;
};

const getInspiringUnits = (localUnits = [], allies = {}) => {
    const inspireUnits = [];

    Object.keys(allies).forEach(ally => {
        const unit = allies[ally];

        // unit cannnot inspire if dispruted
        if (localUnits.includes(unit.id) && unit.inspire && !unit.tokens.disabled) {
            inspireUnits.push(unit.id);
        }
    });

    if (inspireUnits.length) {
        return true;
    }
    
    return false;
};

export const isInspired = (locationId = 'C', locationTiles = [], tiles = [], allies = {}, skipId = null) => {
    // units in the Cellar cannot inspired/be inspired
    if (locationId === 'C') return;
    
    // get units at location, excluding current unit
    const localUnits = getLocalUnits(locationTiles, tiles, skipId);

    if (localUnits.length) {
        // check for inspiring units at location
        const inspired = getInspiringUnits(localUnits, allies);

        if (inspired) {
            return true;
        }
    }
    
    return false;
};
