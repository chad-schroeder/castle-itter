import React from 'react';
import { useSelector } from 'react-redux';

const displayTypes = (modifiers) => {
    return Object.keys(modifiers)
        .map(key => key.charAt(0).toUpperCase())
        .join('/');
};

const actionAttack = (value, tileId) => {
    console.log(`Attack: ${value}, tileId: ${tileId}`);
};

const actionSuppress = (value, tileId) => {
    console.log(`Suppress: ${value}, tileId: ${tileId}`);
};

const Unit = ({ unit }) => {
    const { tiles } = useSelector(state => state.map);

    const {
        id,
        name,
        attack,
        suppress,
        kia, 
        modifiers = {},
        tokens: { 
            tookAction, 
            commanded, 
            disrupted 
        },
    } = unit;

    const { commander, sacrifice, escape } = modifiers;
    
    const { tile: tileId } = tiles.find(tile => tile.unit === id);

    return (
        <li key={id}>
            {name} | {displayTypes(modifiers)}&nbsp;|&nbsp;
            <button>Move</button>
            <button>Swap</button> 
            <button onClick={() => actionAttack(attack, tileId)}>Attack</button>
            <button onClick={() => actionSuppress(suppress, tileId)}>Suppress</button>
            {commander && <button>Command</button>}
            {sacrifice && <button>Sacrifice</button>}
            {escape && <button>Escape</button>}
            {kia && <p>KIA: true</p>}
            {(tookAction || commanded || disrupted) &&
                <>
                    <p>Tokens:</p>
                    <ul>
                        {tookAction && <li>tookAction</li>}
                        {commanded && <li>Commanded</li>}
                        {disrupted && <li>Disrupted</li>}
                    </ul>
                </>
            }
        </li>
    );
};

export default Unit;
