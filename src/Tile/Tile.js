import React from 'react';
// import classNames from 'classnames';

import { ActionButton, Content, DialogTrigger, Dialog } from '@adobe/react-spectrum';

import { } from './styled';;

const Tile = ({ tile }) => {
    const { id, location, los, unit, armament } = tile;

    return (
        <DialogTrigger type="popover" hideArrow>
            <ActionButton>{id}</ActionButton>
            <Dialog>
                <Content>
                    <table>
                        <tbody>
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
                        </tbody>
                    </table>
                </Content>
            </Dialog>
        </DialogTrigger>
    );
};

export default Tile;
