import React           from 'react';
import { useSelector } from 'react-redux';

import { 
    Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader, 
} from '@adobe/react-spectrum';

const columns = [
    { name: 'ID', uid: 'id' },
    { name: 'Name', uid: 'name' },
    { name: 'Tiles', uid: 'tiles' },
    { name: 'Defense', uid: 'defense' },
];

const convertLocationsToList = locations => {
    const list = [];
    Object.keys(locations).forEach(key => list.push(locations[key]));
    return list;
};

const Locations = () => {
    const { locations } = useSelector(state => state.map);

    const locationsList = convertLocationsToList(locations);

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2}>Locations</Heading>
            <Flex height="size-2400" direction="column">
                <TableView aria-label="Tiles">
                    <TableHeader columns={columns}>
                        {column => (
                            <Column key={column.uid}>
                                {column.name}
                            </Column>
                        )}
                    </TableHeader>
                    <TableBody items={locationsList}>
                        {location => (
                            <Row>
                                <Cell>{location.id}</Cell>
                                <Cell>{location.name}</Cell>
                                <Cell>{location.tiles.join(', ')}</Cell>
                                <Cell>{location.defense}</Cell>
                            </Row>
                        )}
                    </TableBody>
                </TableView>
            </Flex>
        </View>
    );
};

export default Locations;
