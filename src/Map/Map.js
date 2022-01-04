import React, { useState} from 'react';
import { useSelector } from 'react-redux';

import { Units } from '../Units';
import ActionDialog from 'ActionDialog';

import { ActionButton, DialogContainer, Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader } from '@adobe/react-spectrum';

const Map = () => {
    const { tiles } = useSelector(state => state.map);
    const { allies, axis } = useSelector(state => state.units);

    const [activeUnit, setActiveUnit] = useState(null);
    const [tileDialog, setTileDialog] = useState(false);

    const columns = [
        { name: 'Name', uid: 'id' },
        { name: 'Location', uid: 'location' },
        { name: 'LOS', uid: 'los' },
        { name: 'Unit', uid: 'unit' },
        { name: 'Armament', uid: 'armament' },
    ];

    const onUnitClick = unitObj => {
        setActiveUnit(unitObj);
    };

    return (
        <>
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-150"
                paddingX="size-200"
            >
                <Heading level={2} marginBottom="size-100">Tiles</Heading>
                <Flex height="size-5000" width="100%" direction="column" gap="size-150">
                    <TableView aria-label="Tiles">
                        <TableHeader columns={columns}>
                            {column => (
                                <Column key={column.uid}>
                                    {column.name}
                                </Column>
                            )}
                        </TableHeader>
                        <TableBody items={tiles}>
                            {item => (
                            <Row>
                                <Cell>{item.id}</Cell>
                                <Cell>{item.location}</Cell>
                                <Cell>{item.los.length ? item.los.map(sight => `${sight}`).join(', ') : '-'}</Cell>
                                <Cell>{item.unit ? item.unit : '-'}</Cell>
                                <Cell>{item.armament ? item.armament.name : '-'}</Cell>
                            </Row>
                            )}
                        </TableBody>
                    </TableView>
                </Flex>
            </View>
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                marginY="size-200"
                paddingY="size-150"
                paddingX="size-200"
            >
                <Heading level={2} marginBottom="size-100">Units</Heading>
                <Units 
                    units={allies} 
                    tiles={tiles} 
                    activeUnit={activeUnit}
                    onUnitClick={onUnitClick} 
                />
            </View>
            <DialogContainer onDismiss={() => setTileDialog(false)} isDismissable>
                {tileDialog && (
                    <>
                        <h2>Tile Dialog</h2>
                        <ActionButton onPress={() => setTileDialog(false)}>
                            Close
                        </ActionButton>
                    </>
                )}
            </DialogContainer>
            {activeUnit && (
                <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    marginY="size-200"
                    paddingY="size-125"
                    paddingX="size-200"
                >
                    <Heading level={3} marginBottom="size-100">Unit Actions</Heading>
                    <ActionDialog 
                        unit={activeUnit} 
                        allies={allies} 
                        axis={axis} 
                        tiles={tiles} 
                    />
                </View>
            )}
        </>
    );
};

export default Map;
