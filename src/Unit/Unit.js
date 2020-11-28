import React from 'react';

import {

} from './styled';

const displayTypes = modifiers => {
    if (modifiers) {
        return Object.keys(modifiers)
        .map(key => key.charAt(0).toUpperCase())
        .join('/');
    }
    return null;
};

const Unit = ({ id, name, nationality, attack, suppress, commander, tanker, officer, inspire, sacrifice, morale, escape, reinforcement, exhausted, casualty, }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{nationality}</td>
            <td>{attack}</td>
            <td>{suppress}</td>
            <td>{commander && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
            <td>{tanker && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
            <td>{officer && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
            <td>{inspire && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
            <td>{sacrifice && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
            <td>{morale && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
            <td>{escape && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
            <td>{reinforcement && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
            <td>{exhausted && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
            <td>{casualty && <img src="images/CheckmarkCircle.svg" alt="" />}</td>
        </tr>
    );
};

export default Unit;
