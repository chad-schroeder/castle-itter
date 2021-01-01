import React from 'react';
import classNames from 'classnames';

import { 
    StyledContainer, StyledName, StyledNationality, StyledValues, StyledCommanded, StyledDisrupted, StyledOrdered,
} from './styled';

const Unit = ({ unit, tile = {}, isInspired = false }) => {
    const { 
        id,
        name, 
        nationality, 
        attack, 
        suppress, 
        commander, 
        tanker, 
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

    return (
        <StyledContainer 
            className={classNames({
                'is-ordered': ordered,
                'is-disrupted': disrupted,
                'is-commanded': commanded,
                'is-inspired': isInspired,
                'is-exhausted': exhausted,
            })}
            onClick={() => console.log(id, attackVal, suppressVal)}
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
            {/* <p>
                {commander && <img src="images/checkmark.svg" width="20" alt="" />}
            </p>
            <p>
                {tanker && <img src="images/checkmark.svg" width="20" alt="" />}
            </p>
            <p>
                {ordered && <img src="images/checkmark.svg" width="20" alt="" />}
            </p>
            <p>
                {commanded && <img src="images/commanded.svg" width="20" alt="" />}
            </p>
            <p>
                {disrupted && <img src="images/disrupted.svg" width="20" alt="" />}
            </p>
            <p>
                {exhausted && <img src="images/checkmark.svg" width="20" alt="" />}
            </p>
            <p>
                {casualty && <img src="images/checkmark.svg" width="20" alt="" />}
            </p> */}
        </StyledContainer>
    );
};

export default Unit;
