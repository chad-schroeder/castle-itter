import React                        from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames                   from 'classnames';

import { ActionGroup, Item, } from '@adobe/react-spectrum';

import More      from '@spectrum-icons/workflow/More';
import Lock      from '@spectrum-icons/workflow/LockClosed';
import Disrupted from '@spectrum-icons/workflow/FlashOn';
import Casualty  from '@spectrum-icons/workflow/Blur';

import { 
    StyledContainer, StyledName, StyledValues, StyledDisrupted, StyledActions, StyledLocked, StyledCasualty,
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
        locked,
        deployed = false,
        escape,
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
                    'is-locked': locked,
                    'is-escape': escape,
                    'is-deployed': deployed,
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
            <StyledDisrupted>
                <Disrupted size="L" color="negative" />
            </StyledDisrupted>
            <StyledLocked>
                <Lock size="L" color="notice" />
            </StyledLocked>
            <StyledCasualty>
                <Casualty size="L" color="negative" />
            </StyledCasualty>

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
