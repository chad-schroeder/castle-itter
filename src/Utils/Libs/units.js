import store from '../../store';

// const { tiles } = store.getState().map;
// const { allies } = store.getState().units;

// get unit stats
// export const getUnit = unitId => allies[unitId];

// // verify unit can take an action
// export const canTakeAction = unitId => {
//     const unit = allies[unitId];

//     if (unit.exhausted || unit.tokens.length) {
//         return false;
//     }

//     return true;
// };

// export const getLocationUnits = (locationId, skipId = null) => {
//     const units = tiles
//         .filter(tile => 
//             tile.unit &&
//             tile.unit !== skipId &&
//             tile.location === locationId)
//         .map(tile => tile.unit);

//     return units;
// };

// export const getActionableUnits = (list, skipId = null) => {
//     const units = list
//         .filter(unit => 
//             !unit.exhausted && 
//             !unit.tokens.commanded && 
//             !unit.tokens.ordered && 
//             unit.id !== skipId
//         );
//     return units;
// };

// export const getTargetsByColor = color => {
//     const colors = store.getState().map.colors;
//     return colors[color];
// };

// export const exhaustUnit = unitId => {
//     const payloadUnits = allies.map(unit => {
//         if (unit.id === unitId) {
//             return { ...unit, exhausted: true, tokens: ['action'] };
//         }
//         return unit;
//     });

//     store.dispatch({ type: 'UPDATE_ALLIES', payload: payloadUnits });
// };

// export const recoverExhausted = unitId => {
//     const payloadUnits = allies.map(unit => {
//         if (unit.id === unitId) {
//             return { ...unit, exhausted: false };
//         }
//         return unit;
//     });

//     store.dispatch({ type: 'UPDATE_ALLIES', payload: payloadUnits });
// };

// export const recoverToken = (unitId, removeToken) => {
//     const payloadUnits = allies.map(unit => {
//         if (unit.id === unitId) {
//             const tokens = unit.tokens.filter(token => token !== removeToken);
//             return { ...unit, tokens };
//         }
//         return unit;
//     });

//     store.dispatch({ type: 'UPDATE_ALLIES', payload: payloadUnits });
// };

// export const tallyCasualty = (unitId, tileId) => {
//     // remove unit from tile
//     const payloadTiles = tiles.map(tile => {
//         if (tile.id === tileId) {
//             return { ...tile, unit: null };
//         }
//         return tile;
//     });

//     store.dispatch({ type: 'UPDATE_TILES', payload: payloadTiles });

//     // update unit to casualty
//     const payloadUnits = allies.map(unit => {
//         if (unit.id === unitId) {
//             return { ...unit, casualty: true };
//         }
//         return unit;
//     });

//     store.dispatch({ type: 'UPDATE_ALLIES', payload: payloadUnits });
// };
