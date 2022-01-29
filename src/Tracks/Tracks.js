import React           from 'react';
import { useSelector } from 'react-redux';

import { Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader, } from '@adobe/react-spectrum';

const columns = [
    { name: 'ID', uid: 'id' },
    { name: 'LOS', uid: 'los' },
    { name: 'Counter', uid: 'counter' },
    { name: 'Suppression', uid: 'counter.type' },
];

const Tracks = () => {
    const { tracks } = useSelector(state => state.map);

    const getLineOfSight = suppression => suppression ? suppression.map(unit => `${unit}`).join(', ') : '-';
    
    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2}>Tracks</Heading>
            <Flex height="size-2400" direction="column">
                <TableView aria-label="Tiles">
                    <TableHeader columns={columns}>
                        {column => (
                            <Column key={column.uid}>
                                {column.name}
                            </Column>
                        )}
                    </TableHeader>
                    <TableBody items={tracks}>
                        {item => (
                            <Row>
                                <Cell>{item.id}</Cell>
                                <Cell>{item.los}</Cell>
                                <Cell>{item.counter?.type ? item.counter.type : '-'}</Cell>
                                <Cell>{getLineOfSight(item.suppress)}</Cell>
                            </Row>
                        )}
                    </TableBody>
                </TableView>
            </Flex>
        </View>
    );
};

export default Tracks;
