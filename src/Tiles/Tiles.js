import React from 'react';
import { useSelector } from 'react-redux';

import { 
    Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader, 
} from '@adobe/react-spectrum';

const Tiles = () => {
    const { tiles } = useSelector(state => state.map);

    const columns = [
        { name: 'Name', uid: 'id' },
        { name: 'Location', uid: 'location' },
        { name: 'LOS', uid: 'los' },
        { name: 'Unit', uid: 'unit' },
        { name: 'Armament', uid: 'armament' },
    ];

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2} marginBottom="size-100">Tiles</Heading>
            <Flex height="size-5000" direction="column">
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
                                <Cell>{item.los ? item.los.map(sight => `${sight}`).join(', ') : '-'}</Cell>
                                <Cell>{item.unit ? item.unit : '-'}</Cell>
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
