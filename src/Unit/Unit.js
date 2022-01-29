import React                        from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames                   from 'classnames';

import { ActionGroup, Item, } from '@adobe/react-spectrum';

import More from '@spectrum-icons/workflow/More';

import { 
    StyledContainer, StyledName, StyledTile, StyledValues, StyledCommanded, StyledDisrupted, StyledOrdered, StyledActions,
} from './styled';

const Unit = ({ unit }) => {
    const { activeDefenderId } = useSelector(state => state.app);
    const dispatch = useDispatch();

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
            className={classNames({
                'is-active': id === activeDefenderId,
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
                {tile ? tile : '-'}
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
