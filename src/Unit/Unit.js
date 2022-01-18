import React from 'react';
import classNames from 'classnames';

import { 
    StyledContainer, StyledName, StyledTile, StyledValues, StyledCommanded, StyledDisrupted, StyledOrdered,
} from './styled';

const Unit = ({ unit, isActive = false, onClick }) => {
    let { 
        id,
        name,
        attack,
        suppress,
        tanker,
        exhausted,
        casualty,
        ordered,
        disrupted,
        commanded,
        mobilized,
        tileId = '-',
        armament,
    } = unit;

    if (tanker && armament) {
        attack = armament.attack;
        suppress = armament.suppress;
    }

    return (
        <StyledContainer 
            className={classNames({
                'is-active': isActive,
                'is-ordered': ordered,
                'is-disrupted': disrupted,
                'is-commanded': commanded,
                'is-inspired': false,
                'is-exhausted': exhausted,
                'is-casualty': casualty,
                'not-mobilized': !mobilized,
            })}
            onClick={() => onClick(id)}
        >
            <StyledName>
                {name}
            </StyledName>
            <StyledTile>
                {tileId}
            </StyledTile>
            <StyledValues>
                {attack} | {suppress}
            </StyledValues>
            <StyledCommanded>
                <img src="images/commanded.svg" width="20" alt="commanded" />
            </StyledCommanded>
            <StyledDisrupted>
                <img src="images/disrupted.svg" width="20" alt="disrupted" />
            </StyledDisrupted>
            <StyledOrdered>
                <img src="images/checkmark.svg" width="20" alt="ordered" />
            </StyledOrdered>
        </StyledContainer>
    );
};

export default Unit;
