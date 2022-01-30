import React, { useState } from 'react';
import { useSelector }     from 'react-redux';

import { 
    Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader, 
} from '@adobe/react-spectrum';

const convertLocationsToList = locations => {
    const list = [];
    Object.keys(locations).forEach(key => list.push(locations[key]));
    return list;
};

const Locations = () => {
    const { locations } = useSelector(state => state.map);

    const [selectedLocation, setSelectedLocation] = useState(new Set([]));

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
                <TableView 
                    aria-label="Tiles"
                    selectionMode="single"
                    selectedKeys={selectedLocation}
                    onSelectionChange={setSelectedLocation}
                >
                    <TableHeader>
                        <Column maxWidth={180}>ID</Column>
                        <Column>Name</Column>
                        <Column>Tiles</Column>
                        <Column>Defense</Column>
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
