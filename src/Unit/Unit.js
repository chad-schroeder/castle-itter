import React from 'react';
import { useSelector } from 'react-redux';

const Unit = ({ unit }) => {
    const { id, name, attack, suppress, modifiers = {}, tokens, kia, placement } = unit;
    const { commander, sacrifice, escape } = modifiers;
    const { tookAction, commanded, disrupted } = tokens;

    const { deployment } = useSelector(state => state.common);

    const displayTypes = Object.keys(modifiers)
        .map(key => key.charAt(0).toUpperCase())
        .join('/');

    const disableUnit = () => {
        if (deployment === 'Start' && placement !== 'Deployment') return true;
        if (deployment === 'Normal' && placement === 'Reinforcement') return true;
    };

    const handleClick = (action, value = null) => console.log(`${action}: ${value}`);
    
    return (
        <li key={id}>
            {name} | {displayTypes}&nbsp;|&nbsp;
            <button onClick={() => handleClick('Move')} disabled={disableUnit()}>Move</button>
            <button onClick={() => handleClick('Swap')} disabled={disableUnit()}>Swap</button> 
            <button onClick={() => handleClick('Attack', attack)} disabled={disableUnit()}>Attack</button>
            <button onClick={() => handleClick('Suppress', suppress)} disabled={disableUnit()}>Suppress</button>
            {commander && <button onClick={() => handleClick('Command')} disabled={disableUnit()}>Command</button>}
            {sacrifice && <button onClick={() => handleClick('Sacrifice')} disabled={disableUnit()}>Sacrifice</button>}
            {escape && <button onClick={() => handleClick('Escape')} disabled={disableUnit()}>Escape</button>}
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
