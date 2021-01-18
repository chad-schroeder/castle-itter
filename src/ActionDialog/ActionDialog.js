import React from 'react';
import { useDispatch } from 'react-redux';

// import { actionMove, canMove, canMoveWithin, canEscape } from 'Utils/Actions/move';

import { ActionButton, ActionGroup, Item, Picker, Tooltip, TooltipTrigger } from '@adobe/react-spectrum';

import { StyledContainer, } from './styled';

const ActionDialog = ({ unit, tiles, allies, axis }) => {
    const dispatch = useDispatch();

    if (Object.keys(unit).length === 0) return false;

    const { unitId, name, attack, suppress, ordered, commanded, disrupted, exhausted, tileId } = unit;

    const canTakeAction = () => {
        if (ordered || exhausted || disrupted || commanded) {
            return false;
        }
        return true;
    };

    const removeExhaustion = unitId => {
        const units = {
            ...allies,
            [unitId]: {
                ...allies[unitId],
                exhausted: false,
            },
        };

        dispatch({ type: 'REMOVE_EXHAUSTION', payload: units });
    };

    const removeDisruption = unitId => {
        const units = {
            ...allies,
            [unitId]: {
                ...allies[unitId],
                tokens: {
                    ...allies[unitId].tokens,
                    disrupted: false,
                },
            },
        };

        dispatch({ type: 'REMOVE_DISRUPTION', payload: units });
    };

    return (
        <StyledContainer>
            <p>{name}, {attack}, {suppress}</p>
            <ActionButton>
                {tileId}
            </ActionButton>
            {canTakeAction() && (
                <>
                    <p>
                        move to
                    </p>
                    <Picker 
                    items={tiles}
                    onSelectionChange={(selected) => console.log(selected)} 
                    aria-label="Move"
                    >
                        {item => <Item>{item.id}</Item>}
                    </Picker>
                    <ActionButton onPress={() => console.log('Move pressed')}>
                        Move
                    </ActionButton>
                </>
            )}
            {exhausted && (
                <ActionButton onPress={() => removeExhaustion(unitId)}>
                    Remove Exhaustion
                </ActionButton>
            )}
            {disrupted && (
                <ActionButton onPress={() => removeDisruption(unitId)}>
                    Remove Disruption
                </ActionButton>
            )}
        </StyledContainer>
    );
};

// const ActionDialog = ({ location, los, unit }) => {
//     const [disabled, disableActions] = useState(false);

//     const { 
//         id,
//         attack, 
//         suppress, 
//         commander, 
//         escape, 
//         tokens: { 
//             ordered, 
//             commanded, 
//             disrupted 
//         }, 
//         exhausted, 
//     } = unit;

//     // if unit cannot perform an action, return
//     if (exhausted || commanded || ordered || disrupted) return;

//     const localeUnits = [];
//     // const localeUnits = canMoveWithin(location, id);
//     console.log('ActionDialog', localeUnits);

//     const attackValue = getAttackValue(unit, 'C');
//     console.log('canAttack', attackValue);

//     if (escape) {
//         const escapeRoute = false;
//         // const escapeRoute = canEscape(los);
//         console.log('escapeRoute', escapeRoute);
//     }
    
//     const moveButton = true;
//     // const moveButton = canMove();
//     let moveWithinButton;
//     let attackButton;
//     let suppressButton;
//     let commandButton;
//     let escapeButton;

//     if (location !== 'Deployment' || location !== 'C') {
//         // are there valid units at same location?
//         // moveWithinButton = true;

//         // can attack?
//         if (attack) {
//             attackButton = true;
//         }

//         // can suppress?
//         if (suppress > 0) {
//             suppressButton = true;
//         }

//         if (commander) {
//             commandButton = true;
//         }
        
//         // can escape?
//         if (escape) {
//             // escape possible at location?
//                 // if possible, show escape button
//                 escapeButton = true;
//         }
//     }

//     const doAction = actionName => {
//         // remove artifacts around action created by tooltips
//         const action = actionName.replace(/[$.]/g, '');
//         console.log(`${action} clicked!`);

//         disableActions(true);

//         switch(action) {
//             case 'move':
//                 // actionMove(id);
//                 break;
//             case 'moveWithin':
//                 // do moveWithin
//                 break;
//             case 'attack':
//                 // do attack
//                 break;
//             case 'suppress':
//                 // suppress
//                 break;
//             case 'command':
//                 // command
//                 break;
//             case 'escape':
//                 // escape
//                 break;
//             default: 
//                 console.log(`Unrecognized unit action called: ${action}`);
//         }
//     };

//     return (
//         <div>
//             <ActionGroup
//                 density="compact"
//                 selectionMode="single"
//                 isDisabled={disabled}
//                 onAction={doAction}
//             >
//                 {moveButton && (
//                     <TooltipTrigger delay={0}>
//                         <Item key="move" aria-label="Move">
//                             <img src="images/move.svg" alt="" />
//                         </Item>
//                         <Tooltip>Move</Tooltip>
//                     </TooltipTrigger>
//                 )}
//                 {moveWithinButton && (
//                     <TooltipTrigger delay={0}>
//                         <Item key="moveWithin" aria-label="Move Within">
//                             <img src="images/moveWithin.svg" alt="" />
//                         </Item>
//                         <Tooltip>Move Within</Tooltip>
//                     </TooltipTrigger>
//                 )}
//                 {attackButton && (
//                     <TooltipTrigger delay={0}>
//                         <Item key="attack" aria-label="Attack">
//                             <img src="images/crosshairs.svg" alt="" />
//                         </Item>
//                         <Tooltip>Attack</Tooltip>
//                     </TooltipTrigger>
//                 )}
//                 {suppressButton && (
//                     <TooltipTrigger delay={0}>
//                         <Item key="suppress" aria-label="Suppress">
//                             <img src="images/suppress.svg" alt="" />
//                         </Item>
//                         <Tooltip>Suppress</Tooltip>
//                     </TooltipTrigger>
//                 )}
//                 {commandButton && (
//                     <TooltipTrigger delay={0}>
//                         <Item key="command" aria-label="Command">
//                             <img src="images/roundel.svg" alt="" />
//                         </Item>
//                         <Tooltip>Command</Tooltip>
//                     </TooltipTrigger>
//                 )}
//                 {escapeButton && (
//                     <TooltipTrigger key="escape" delay={0}>
//                         <Item key="escape" aria-label="Escape">
//                             <img src="images/escape.svg" alt="" />
//                         </Item>
//                         <Tooltip>Escape</Tooltip>
//                     </TooltipTrigger>
//                 )}
//             </ActionGroup>
//         </div>
//     )
// };

export default ActionDialog;
