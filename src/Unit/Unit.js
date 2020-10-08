import React from 'react';

const Unit = ({ unit }) => {
    const { id, name, nationality, placement, attack, suppress, modifiers = {}, tokens, kia, } = unit;
    const { commander, tanker, sacrifice, officer, morale, reinforcement, inspire, prisoner, escape } = modifiers;
    const { action, command, disrupted } = tokens;

    const handleClick = (action, value = null) => console.log(`${action}: ${value}`);
    
    return (
        <li key={id}>
            <p>Name: {name}</p>
            <p>Nationality: {nationality}</p>
            <p>Placement: {placement}</p>
            <p>Actions:</p>
            <ul>
                <li><button onClick={() => handleClick('Attack', attack)}>Attack</button></li>
                <li><button onClick={() => handleClick('Suppress', suppress)}>Suppress</button></li>
                {commander && <li><button onClick={() => handleClick('Command')}>Command</button></li>}
                {sacrifice && <li><button onClick={() => handleClick('Sacrifice')}>Sacrifice</button></li>}
                {escape && <li><button onClick={() => handleClick('Escape')}>Escape</button></li>}
            </ul>
            {kia && <p>KIA: true</p>}
            {(action || command || disrupted) &&
                <>
                    <p>Tokens:</p>
                    <ul>
                        {action && <li>Action</li>}
                        {command && <li>Commanded</li>}
                        {disrupted && <li>Disrupted</li>}
                    </ul>
                </>
            }
        </li>
    );
};

export default Unit;
