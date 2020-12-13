import React from 'react';

import { StyledCenter, StyledRight, StyledSpinner } from './styled';

const Unit = ({ id, name, nationality, attack, suppress, commander, tanker, tokens, exhausted, casualty, highlight, }) => {
    return (
        <tr>
            <StyledSpinner highlight={highlight}>
                <img src="images/select.svg" alt="" />
            </StyledSpinner>
            <td>{id}</td>
            <td>{name}</td>
            <td>{nationality}</td>
            <StyledRight>{attack}</StyledRight>
            <StyledRight>{suppress}</StyledRight>
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
