import React from 'react';

import classNames from 'classnames';

import { 
    StyledContainer, StyledName, StyledNationality, StyledValues, StyledCommanded, StyledDisrupted, StyledOrdered,
} from './styled';

const Unit = ({ unit, isActive, onClick }) => {
    const { 
        name,
        tanker,
        exhausted,
        casualty,
        ordered,
        disrupted,
        commanded,
        tileId,
        armament,
    } = unit;

    let {
        attack,
        suppress,
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
            })}
            onClick={() => onClick(unit)}
        >
            <StyledName>
                {name}
            </StyledName>
            <StyledNationality>
                {tileId}
            </StyledNationality>
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
