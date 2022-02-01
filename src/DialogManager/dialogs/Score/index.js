import React from 'react';

import { useDialogContainer } from '@adobe/react-spectrum';

import { 
    Dialog, Heading, Content, Text, ButtonGroup, Button, Flex, View, Divider, Cell, Column, Row, TableView, TableBody, TableHeader,
} from '@adobe/react-spectrum';

const Score = () => {
    const dialog = useDialogContainer();

    return (
        <Dialog size="L">
            <Heading level={1} marginX={'auto'}>
                <span style={{ fontSize: 28 }}>
                    Victory!
                </span> 
            </Heading>
            <Divider size="L" />
            <Content>
                <p>
                    <strong>Win</strong> if you scored 1 or higher.
                </p>
                <p>
                    <strong>Draw</strong> if you scored 0 or lower.
                </p>
                <p>
                    <strong>Loss</strong> if an SS counter reached the castle.
                </p>
                <Heading level={3} marginTop="size-300">Scoring</Heading>
                <TableView aria-label="Score chart">
                    <TableHeader>
                        <Column width={140}>Score</Column>
                        <Column>Award</Column>
                        <Column width={160}>Victory Level</Column>
                    </TableHeader>
                    <TableBody>
                        <Row>
                            <Cell>40+</Cell>
                            <Cell>Austrian National Hero</Cell>
                            <Cell>Epic Victory</Cell>
                        </Row>
                        <Row>
                            <Cell>30 - 39</Cell>
                            <Cell>Medal of Honor</Cell>
                            <Cell>Major Victory</Cell>
                        </Row>
                        <Row>
                            <Cell>20 - 29</Cell>
                            <Cell>Distinguished Service Cross</Cell>
                            <Cell>Major Victory</Cell>
                        </Row>
                        <Row>
                            <Cell>10 - 19</Cell>
                            <Cell>Silver Star</Cell>
                            <Cell>Minor Victory</Cell>
                        </Row>
                        <Row>
                            <Cell>1 - 9</Cell>
                            <Cell>Bronze Star</Cell>
                            <Cell>Minor Victory</Cell>
                        </Row>
                        <Row>
                            <Cell>0 or less</Cell>
                            <Cell>None</Cell>
                            <Cell>Draw</Cell>
                        </Row>
                    </TableBody>
                </TableView>
            </Content>
            <ButtonGroup>
                <Button variant="secondary" onPress={dialog.dismiss}>
                    Close
                </Button>
                <Button variant="cta" onPress={dialog.dismiss} autoFocus>
                    Play Again
                </Button>
            </ButtonGroup>
        </Dialog>
    );
};

export default Score;
