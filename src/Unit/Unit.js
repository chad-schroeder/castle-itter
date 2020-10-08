import React from 'react';

const Unit = ({ unit }) => {
    const { id, name, nationality, placement, attack, suppress, modifiers = {}, tokens, kia, } = unit;
    const { commander, tanker, sacrifice, officer, morale, reinforcement, inspire, prisoner, escape } = modifiers;
    const { action, command, disrupted } = tokens;
    
    return (
        <li key={id}>
            <p>Name: {name}</p>
            <p>Nationality: {nationality}</p>
            <p>Placement: {placement}</p>
            <p>Attack: {attack}</p>
            <p>Suppress: {suppress}</p>
            {modifiers &&
                <>
                    <p>Modifiers:</p>
                    <ul>
                        {commander && <li>Commander</li>}
                        {tanker && <li>Tanker</li>}
                        {sacrifice && <li>Sacrifice</li>}
                        {officer && <li>Officer</li>}
                        {morale && <li>Morale</li>}
                        {reinforcement && <li>Reinforcement</li>}
                        {inspire && <li>Inspire</li>}
                        {prisoner && <li>Prisoner</li>}
                        {escape && <li>Escape</li>}
                    </ul>
                </>
            }
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
