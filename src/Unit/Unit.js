import React from 'react';

const Unit = ({ unit }) => {
    const { id, name, attack, suppress, modifiers = {}, tokens, kia, } = unit;
    const { commander, sacrifice, escape } = modifiers;
    const { tookAction, commanded, disrupted } = tokens;

    const displayTypes = Object.keys(modifiers)
        .map(key => key.charAt(0).toUpperCase())
        .join('/');

    const handleClick = (action, value = null) => console.log(`${action}: ${value}`);
    
    return (
        <li key={id}>
            <p>Name: {name}</p>
            {displayTypes && <p>Modifiers: {displayTypes}</p>}
            <p>Actions:</p>
            <ul>
                <li><button onClick={() => handleClick('Attack', attack)}>Attack</button></li>
                <li><button onClick={() => handleClick('Suppress', suppress)}>Suppress</button></li>
                {commander && <li><button onClick={() => handleClick('Command')}>Command</button></li>}
                {sacrifice && <li><button onClick={() => handleClick('Sacrifice')}>Sacrifice</button></li>}
                {escape && <li><button onClick={() => handleClick('Escape')}>Escape</button></li>}
            </ul>
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
