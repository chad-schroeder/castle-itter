// import { getLocationUnits } from 'Utils/Libs/units';

// import store from 'store';

const checkInspired = () => true;

// const { allies } = store.getState().units;

// const checkInspired = (locationId, unitId) => {
//     // if location is the cellar, return
//     if (locationId === 'C') return;
    
//     // find other units at location
//     const units = getLocationUnits(locationId, unitId);

//     // iterate through units at location
//     const inspired = units.some(unit => {
//         const ally = allies[unit];

//         if (ally.inspire && !ally.exhaused && !ally.tokens.includes('disrupted')) {
//             return true;
//         }

//         return false;
//     });

//     if (inspired) {
//         return true;
//     }

//     return false;
// };

export default checkInspired;
