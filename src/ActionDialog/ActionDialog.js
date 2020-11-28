import React, { useState } from 'react';

import { getOpenTiles } from 'Utils/Actions/move';

import {ActionGroup, Item} from '@adobe/react-spectrum';

const ActionDialog = ({ unit, location }) => {
    const { 
        attack, 
        suppress, 
        commander, 
        escape, 
        exhausted, 
        commanded, 
        ordered, 
    } = unit;

    const [action, setAction] = useState('None');

    // if unit cannot perform an action, return
    if (exhausted || commanded || ordered) return;

    let moveButton;
    let moveWithinButton;
    let attackButton;
    let suppressButton;
    let commandButton;
    let escapeButton;

    // can move? 
    const openTiles = getOpenTiles();

    if (openTiles.length) {
        moveButton = true;
    }

    if (location !== 'Deployment' || location !== 'C') {
        // are there valid units at same location?
        // moveWithinButton = true;

        // can attack?
        if (attack) {
            attackButton = true;
        }

        // can suppress?
        if (suppress > 0) {
            suppressButton = true;
        }

        // can command?
        if (commander) {
            // disrupted/exhausted units at location?
            commandButton = true;
        }
        
        // can escape?
        if (escape) {
            // escape possible at location?
                // if possible, show escape button
                escapeButton = true;
        }
    }

    return (
        <div>
            <h2>Action Dialog: {action}</h2>
            <ActionGroup density="compact" onAction={setAction}>
                {moveButton && (
                    <Item key="move" aria-label="Move">
                        Move
                    </Item>
                )}
                {moveWithinButton && (
                    <Item key="moveWithin" aria-label="Move Within">
                        Move Within
                    </Item>
                )}
                {attackButton && (
                    <Item key="attack" aria-label="Attack">
                        Attack
                    </Item>
                )}
                {suppressButton && (
                    <Item key="suppress" aria-label="Suppress">
                        Suppress
                    </Item>
                )}
                {commandButton && (
                    <Item key="command" aria-label="Command">
                        Command
                    </Item>
                )}
                {escapeButton && (
                    <Item key="escape" aria-label="Escape">
                        Escape
                    </Item>
                )}
            </ActionGroup>
        </div>
    )
};

export default ActionDialog;
