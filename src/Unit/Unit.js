import React from 'react';

import { StyledCenter, StyledRight } from './styled';

const Unit = ({ unit }) => {
    const { id, nationality, attack, suppress, commander, tanker, tokens, exhausted, casualty, tile, } = unit;

    return (
        <tr>
            <td>{id}</td>
            <td>{tile}</td>
            <td>{nationality}</td>
            <StyledRight>
                {attack}
            </StyledRight>
            <StyledRight>
                {suppress}
            </StyledRight>
            <StyledCenter>
                {commander && <img src="images/checkmark.svg" width="20" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {tanker && <img src="images/checkmark.svg" width="20" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {tokens.ordered && <img src="images/checkmark.svg" width="20" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {tokens.commanded && <img src="images/commanded.svg" width="20" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {tokens.disrupted && <img src="images/disrupted.svg" width="20" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {exhausted && <img src="images/checkmark.svg" width="20" alt="" />}
            </StyledCenter>
            <StyledCenter>
                {casualty && <img src="images/checkmark.svg" width="20" alt="" />}
            </StyledCenter>
        </tr>
    );
};

export default Unit;
