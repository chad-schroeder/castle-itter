import React, { useState } from 'react';
import { useSelector }     from 'react-redux';

import { 
    Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader, 
} from '@adobe/react-spectrum';

const getLineOfSight = los => los ? los.map(sight => `${sight}`).join(', ') : '-';

const Tiles = () => {
    const { tiles } = useSelector(state => state.map);

    const [selectedTile, setSelectedTile] = useState(new Set([]));

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2} marginBottom="size-100">Tiles</Heading>
            <Flex height="size-2400" direction="column">
                <TableView 
                    aria-label="Tiles"
                    selectionMode="single"
                    selectedKeys={selectedTile}
                    onSelectionChange={setSelectedTile}
                >
                    <TableHeader>
                        <Column maxWidth={180}>ID</Column>
                        <Column>Location</Column>
                        <Column>LOS</Column>
                        <Column>Armament</Column>
                    </TableHeader>
                    <TableBody items={tiles}>
                        {item => (
                            <Row>
                                <Cell>{item.id}</Cell>
                                <Cell>{item.location}</Cell>
                                <Cell>{getLineOfSight(item.los)}</Cell>
                                <Cell>{item.armament ? item.armament.name : '-'}</Cell>
                            </Row>
                        )}
                    </TableBody>
                </TableView>
            </Flex>
        </View>
    );
};

export default Tiles;
