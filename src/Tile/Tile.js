import React from 'react';
// import classNames from 'classnames';

import { ActionButton, Content, DialogTrigger, Dialog } from '@adobe/react-spectrum';

// import { checkInspired } from 'Utils/Modifiers/inspire';

import { } from './styled';;

const Tile = ({ tile, tiles, allies, highlight }) => {
    const { id, location, los, unit, armament } = tile;
    // const { id: locationId, tiles: locationTiles } = location;
    // const unit = allies[ally];

    // const inspired = checkInspired(locationId, locationTiles, tiles, allies, unit?.id);

    return (
        <DialogTrigger type="popover" hideArrow>
            <ActionButton>{id}</ActionButton>
            {/* <tr>
                <StyledSpinner highlight={highlight} unit={unit}>
                    <img src="images/select.svg" alt="Indicator" />
                </StyledSpinner>
                <td>{id}</td>
                <td>{location.id}</td>
                <td>{los.map(sight => `${sight}`).join(', ')}</td>
                <td>{unit && unit.id}</td>
                <StyledCol className={classNames({
                    'hl-inspired': inspired,
                })}>
                    {attack}
                </StyledCol>
                <StyledCol className={classNames({
                    'hl-inspired': inspired,
                })}>
                    {suppress}
                </StyledCol>
                <td>{armament && armament.name}</td>
            </tr> */}
            <Dialog>
                <Content>
                    <table>
                        <tr>
                            <th>ID:</th><td>{id}</td>
                        </tr>
                        <tr>
                            <th>Location:</th><td>{location}</td>
                        </tr>
                        <tr>
                            <th>LOS:</th><td>{los.length ? los.map(sight => `${sight}`).join(', ') : '-'}</td>
                        </tr>
                        <tr>
                            <th>Unit:</th><td>{unit ? unit : '-'}</td>
                        </tr>
                        <tr>
                            <th>Armament:</th><td>{armament ? armament.name : '-'}</td>
                        </tr>
                    </table>
                </Content>
            </Dialog>
        </DialogTrigger>
    );
};

export default Tile;
