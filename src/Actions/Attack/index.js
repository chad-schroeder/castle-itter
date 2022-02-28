import React from 'react';

import { isInspired } from '../../Utils/Units/checks';

import { 
    ActionButton, DialogTrigger, Dialog, Heading, Content, Divider, Text, Button, ButtonGroup
} from '@adobe/react-spectrum';

import Crosshairs from '@spectrum-icons/workflow/Crosshairs';

const Attack = ({ unit }) => {
    let { attack } = unit;

    if (isInspired(unit)) {
        attack += 1;
    }

    if (attack > 0) {
        return (
            <DialogTrigger>
                <ActionButton>
                    <Crosshairs />
                    <Text>Attack</Text>
                </ActionButton>
                {(close) => (
                    <Dialog>
                        <Heading>Attack</Heading>
                        <Divider />
                        <Content>
                            <Text>
                                Attack points: {attack}
                            </Text>
                        </Content>
                        <ButtonGroup>
                            <Button 
                                variant="secondary" 
                                onPress={close}
                            >
                                Cancel
                            </Button>
                            <Button 
                                variant="cta" 
                                onPress={close} 
                                autoFocus
                            >
                                Roll
                            </Button>
                        </ButtonGroup>
                    </Dialog>
                )}
            </DialogTrigger>
        );
    }
    return null;
};

export default Attack;
