import React from 'react';
import classNames from 'classnames';

import { 
    StyledContainer, StyledName, StyledNationality, StyledValues, StyledCommanded, StyledDisrupted, StyledOrdered,
} from './styled';

const Unit = ({ unit = {}, tile = {}, isInspired = false, isActive = false, onUnitClick }) => {
    const { 
        id: unitId,
        name, 
        attack, 
        suppress, 
        commander = null, 
        tanker = null,
        escape = false,
        tokens: {
            ordered,
            commanded,
            disrupted,
        }, 
        exhausted,
        casualty,
    } = unit;

    const {
        id: tileId,
        location,
        armament,
    } = tile;

    let attackVal = attack;
    let suppressVal = suppress;

    if (tanker && armament) {
        attackVal = tile.armament.attack || 0;
        suppressVal = tile.armament.suppress || 0;
    }

    if (isInspired) {
        attackVal += 1;
        suppressVal += 1;
    }

    const unitObj = {
        unitId,
        name,
        attack: attackVal,
        suppress: suppressVal,
        commander,
        escape,
        ordered,
        commanded,
        disrupted,
        exhausted,
        casualty,
        tileId,
        location,
    };

    return (
        <StyledContainer 
            className={classNames({
                'is-active': isActive,
                'is-ordered': ordered,
                'is-disrupted': disrupted,
                'is-commanded': commanded,
                'is-inspired': isInspired,
                'is-exhausted': exhausted,
                'is-casualty': casualty,
            })}
            onClick={() => onUnitClick(unitObj)}
        >
            <StyledName>
                {name}
            </StyledName>
            <StyledNationality>
                {tileId}
            </StyledNationality>
            <StyledValues>
                {attackVal} / {suppressVal}
            </StyledValues>
            <StyledCommanded>
                <img src="images/commanded.svg" width="20" alt="" />
            </StyledCommanded>
            <StyledDisrupted>
                <img src="images/disrupted.svg" width="20" alt="" />
            </StyledDisrupted>
            <StyledOrdered>
                <img src="images/checkmark.svg" width="20" alt="" />
            </StyledOrdered>
        </StyledContainer>
    );
};

export default Unit;
