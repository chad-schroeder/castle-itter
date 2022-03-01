import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { Heading } from '@adobe/react-spectrum';

import { StyledContainer } from './styled';

const Counter = ({ counter }) => {
    const { id, name, defense } = counter;
    const { currentAction, targetCounter } = useSelector(state => state.app);
    const dispatch = useDispatch();

    const onClick = () => {
        if (currentAction === 'Attack') {
            dispatch({ type: 'SET_TARGET_COUNTER', payload: counter });
        }
        return null;
    };

    return (
        <StyledContainer 
            className={classNames({ 'is-active': id === targetCounter?.id })}
            onClick={onClick}
        >
            <Heading level={5}>{name}</Heading>
            <Heading level={3}>{defense}</Heading>
        </ StyledContainer>
    );
};

export default Counter;
