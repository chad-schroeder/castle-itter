import React, { useState } from 'react';
import { useSelector }     from 'react-redux';

import ActionDialog from '../ActionDialog';
import Unit         from '../Unit';

import { Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader, } from '@adobe/react-spectrum';

import { StyledUnits } from './styled';

const getLineOfSight = los => los.length ? los.map(sight => `${sight}`).join(', ') : '-';

const Units = () => {
    const { defenders } = useSelector(state => state.units);
    const { activeDefenderId } = useSelector(state => state.app);

    const [selectedDefenders, setSelectedDefenders] = useState(new Set([]));

    const activeDefender = defenders.find(defender => defender.id === activeDefenderId);
    
    const renderUnits = defenders.map(unit => <Unit key={unit.id} unit={unit} />);

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
                    <TableHeader>
                        <Column>Name</Column>
                        <Column>LOS</Column>
                        <Column>Locked</Column>
                    </TableHeader>
                    <TableBody items={defenders}>
                        {defender => (
                            <Row>
                                <Cell>{defender.name}</Cell>
                                <Cell>{getLineOfSight(defender.los)}</Cell>
                                <Cell>{defender.locked ? 'true' : '-'}</Cell>
                            </Row>
                        )}
                    </TableBody>
                </TableView>
            </Flex>
            <StyledUnits>
                {renderUnits}
            </StyledUnits>
            <ActionDialog unit={activeDefender} />
        </View>
    );
};

export default Units;
