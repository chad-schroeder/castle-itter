import React                        from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames                   from 'classnames';

import { ActionGroup, Item, } from '@adobe/react-spectrum';

import More from '@spectrum-icons/workflow/More';
import Checkmark from '@spectrum-icons/workflow/Checkmark';
import Star from '@spectrum-icons/workflow/Star';
import Lock from '@spectrum-icons/workflow/LockClosed';
import Disrupted from '@spectrum-icons/workflow/FlashOn';

import { 
    StyledContainer, StyledName, StyledValues, StyledCommanded, StyledDisrupted, StyledOrdered, StyledActions, StyledAttributes, StyledNotMobilized,
} from './styled';

const Unit = ({ unit }) => {
    const { activeDefenderId } = useSelector(state => state.app);
    const dispatch = useDispatch();

    let { 
        id,
        name,
        nationality,
        attack,
        suppress,
        tanker,
        exhausted,
        casualty,
        ordered,
        disrupted,
        commanded,
        mobilized,
        tile,
        armament,
    } = unit;

    if (tanker && armament) {
        attack = armament.attack;
        suppress = armament.suppress;
    }

    const onClick = () => {
        dispatch({ 
            type: 'SET_ACTIVE_DEFENDER_ID', 
            payload: id,
        });
    };

    return (
        <StyledContainer 
            className={
                classNames({
                    'is-active': id === activeDefenderId,
                    'is-ordered': ordered,
                    'is-disrupted': disrupted,
                    'is-commanded': commanded,
                    'is-inspired': false,
                    'is-exhausted': exhausted,
                    'is-casualty': casualty,
                    'not-mobilized': !mobilized,
                    [`nationality-${nationality}`]: true,
                })
            }
            onClick={() => onClick(id)}
        >
            <StyledName>
                {name}
            </StyledName>
            <StyledValues>
                {attack} | {suppress}
            </StyledValues>
            <StyledAttributes>

            </StyledAttributes>
            <StyledDisrupted>
                <Disrupted size="L" color="negative" />
            </StyledDisrupted>
            <StyledNotMobilized>
                <Lock size="L" color="notice" />
            </StyledNotMobilized>
            

            {/* <StyledActions>
                <ActionGroup density="compact">
                    <Item key="brush" aria-label="Brush"><More /></Item>
                    <Item key="select" aria-label="Select"><More /></Item>
                    <Item key="regionSelect" aria-label="Select Region"><More /></Item>
                </ActionGroup>
            </StyledActions> */}
        </StyledContainer>
    );
};

export default Unit;
