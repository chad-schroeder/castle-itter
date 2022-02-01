import React from 'react';
// import classNames from 'classnames';

import { Cell, Row } from '@adobe/react-spectrum'

const Tile = ({ tile }) => {
    const { id, location, los, unit, armament } = tile;

    return (
        <Row>
            <Cell>{id}</Cell>
            <Cell>{location}</Cell>
            <Cell>{los}</Cell>
            <Cell>{unit}</Cell>
            <Cell>{armament ? armament.name : '-'}</Cell>
        </Row>
    );
};

export default Tile;
