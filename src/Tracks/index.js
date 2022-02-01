import React, { useState } from 'react';
import { useSelector }     from 'react-redux';

import { Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader, } from '@adobe/react-spectrum';

const getLineOfSight = suppression => suppression ? suppression.map(unit => `${unit}`).join(', ') : '-';

const Tracks = () => {
    const { tracks } = useSelector(state => state.map);

    const [selectedTrack, setSelectedTrack] = useState(new Set([]));
    
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
                <TableView 
                    aria-label="Tracks"
                    selectionMode="single"
                    selectedKeys={selectedTrack}
                    onSelectionChange={setSelectedTrack}
                >
                    <TableHeader>
                        <Column maxWidth={180}>ID</Column>
                        <Column>LOS</Column>
                        <Column>Counter</Column>
                        <Column>Suppression</Column>
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
