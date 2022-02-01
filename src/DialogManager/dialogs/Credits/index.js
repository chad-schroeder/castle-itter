import React from 'react';

import { useDialogContainer } from '@adobe/react-spectrum';

import { Dialog, Heading, Divider, Content, ButtonGroup, Button, } from '@adobe/react-spectrum';

const Credits = () => {
    const dialog = useDialogContainer();

    return (
        <Dialog size="M">
            <Heading level={2}>Credits</Heading>
            <Divider size="S" />
            <Content>
                <p>
                    <strong>Boardgame design:</strong> David Thompson
                </p>
                <p>
                    <strong>Boardgame artwork:</strong> Matt White
                </p>
                <p>
                    <strong>React code &amp; artwork:</strong> Chad Schroeder
                </p>
            </Content>
            <ButtonGroup>
                <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
            </ButtonGroup>
        </Dialog>
    );
};

export default Credits;
