import React from 'react';

import { StyledCenter, StyledRight } from './styled';

const displayTypes = modifiers => {
    if (modifiers) {
        return Object.keys(modifiers)
        .map(key => key.charAt(0).toUpperCase())
        .join('/');
    }
    return null;
};

const Unit = ({ id, name, nationality, attack, suppress, commander, tanker, officer, inspire, sacrifice, morale, escape, reinforcement, exhausted, casualty, }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{nationality}</td>
            <StyledRight>{attack}</StyledRight>
            <StyledRight>{suppress}</StyledRight>
            <StyledCenter>
                {commander && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {tanker && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {officer && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {inspire && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {sacrifice && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {morale && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {escape && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {reinforcement && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {exhausted && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {casualty && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
        </tr>
    );
};

export default Unit;
