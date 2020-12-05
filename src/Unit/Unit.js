import React from 'react';

import { StyledCenter, StyledRight } from './styled';

const Unit = ({ id, name, nationality, attack, suppress, commander, tanker, tokens, exhausted, casualty, }) => {
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
                {tokens.ordered && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {tokens.commanded && <img src="images/checkmark.svg" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {tokens.disrupted && <img src="images/checkmark.svg" alt="" />}
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
