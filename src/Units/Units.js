import React, { useState } from 'react';
import { useSelector }     from 'react-redux';

import Unit from '../Unit';

import { 
    Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader,  
} from '@adobe/react-spectrum';

import { StyledUnits } from './styled';

const columns = [
    { name: 'Id', uid: 'id' },
    { name: 'Mobilized', uid: 'mobilized' },
    { name: 'LOS', uid: 'los' },
];

const getLineOfSight = los => los.length ? los.map(sight => `${sight}`).join(', ') : '-';

const Units = () => {
    const { defenders } = useSelector(state => state.units);

    const [selectedDefenders, setSelectedDefenders] = useState(new Set([]));

    const renderUnits = defenders.map(unit => {
        return <Unit key={unit.id} unit={unit} />;
    });

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2}>Units</Heading>
            <Flex direction="column">
                <TableView 
                    aria-label="Defenders"
                    marginBottom="size-250"
                    height="size-3000"
                    selectionMode="multiple"
                    selectedKeys={selectedDefenders}
                    onSelectionChange={setSelectedDefenders}
                >
                    <TableHeader columns={columns}>
                        {column => (
                            <Column key={column.uid}>
                                {column.name}
                            </Column>
                        )}
                    </TableHeader>
                    <TableBody items={defenders}>
                        {defender => (
                            <Row>
                                <Cell>{defender.id}</Cell>
                                <Cell>{defender.mobilized.toString()}</Cell>
                                <Cell>{getLineOfSight(defender.los)}</Cell>
                            </Row>
                        )}
                    </TableBody>
                </TableView>
            </Flex>
            <StyledUnits>
                {renderUnits}
            </StyledUnits>
        </View>
    );
};

export default Units;
