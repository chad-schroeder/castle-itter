import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

// import { ActionButton, MenuTrigger, Menu, Item, Text, Keyboard } from '@adobe/react-spectrum';

import { 
    StyledContainer, StyledName, StyledTile, StyledValues, StyledCommanded, StyledDisrupted, StyledOrdered,
} from './styled';

const Unit = ({ unit }) => {
    const { activeDefenderId } = useSelector(state => state.app);
    const ref = useRef(null);
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

    const onContextMenu = (event) => {
        event.preventDefault();

        dispatch({ 
            type: 'SET_ACTIVE_DEFENDER_ID', 
            payload: id,
        });
    };

    useEffect(() => {
        const unitRef = ref.current;
        unitRef.addEventListener('contextmenu', onContextMenu);

        return () => {
            unitRef.removeEventListener('contextmenu', onContextMenu);
        };
    });

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
            ref={ref}
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
        </StyledContainer>
    );
};

export default Unit;
