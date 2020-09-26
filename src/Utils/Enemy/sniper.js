import store from '../../store';

const sniper = () => {
    const { locations, tiles, targeting } = store.getState().map;

    // get target color
    const targetColor = targeting.axis.SN[3]; // green
    console.log('sniper color', targetColor);

    // get target tiles
    const targetColors = targeting.axis[targetColor]; // ['GH1', 'ST2', 'K3', 'ST4', 'ST5', 'ST6']
    console.log('sniper tiles', targetColors);

    // roll for target tile
    const targetTile = 'K3';

    // check if target tile has a unit, otherwise search for next target
    const hasUnit = true;

    // find location id from tile
    const { location: locationId } = tiles.find(tile => tile.id === targetTile);
    console.log('sniper location', locationId);

    // if unit, get defense value of tile location
    const { defense } = locations.find(location => location.id === locationId);
    console.log('sniper defense', defense);

    // roll to hit
    const targetRoll = 6;
        // if hit, eliminate unit
        if (targetRoll >= defense) {
            console.log('unit eliminated');
        }
        // else, end action

};

export default sniper;
