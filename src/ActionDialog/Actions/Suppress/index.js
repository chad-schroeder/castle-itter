import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ColorBoxes from './ColorBoxes';

import { 
    ActionButton, DialogTrigger, Dialog, Heading, Content, Divider, Text, Button, ButtonGroup, Flex,
} from '@adobe/react-spectrum';

import Relevance from '@spectrum-icons/workflow/Relevance';

const Suppress = ({ unit }) => {
    const { suppression } = useSelector(state => state.app);
    const { suppress, los } = unit;

    const initialAllocation = {
        green: 0,
        orange: 0,
        purple: 0,
        black: 0,
    };

    const [allocation, setAllocation] = useState(initialAllocation);
    const [pointsRemaining, setpointsRemaining] = useState(suppress);
    const dispatch = useDispatch();

    const increment = color => {
        setAllocation({
            ...allocation,
            [color]: allocation[color] + 1,
        });
        setpointsRemaining(pointsRemaining - 1);
    };

    const decrement = color => {
        let value = allocation[color] <= 0 ? 0 : 1;

        setAllocation({
            ...allocation,
            [color]: allocation[color] - value,
        });
        setpointsRemaining(pointsRemaining + value);
    };

    const reset = () => {
        setAllocation(initialAllocation);
        setpointsRemaining(suppress);
    }

    const cleanup = close => {
        dispatch({ type: 'UNSET_CURRENT_ACTION' });

        // dismiss dialog
        close(); 

        // reset allocation + pointsRemaining
        setAllocation(initialAllocation);
        setpointsRemaining(suppress);
    };

    const onAction = () => {
        dispatch({ type: 'SET_CURRENT_ACTION', payload: 'Suppress' });
    };

    const onCancel = close => {
        cleanup(close);
    };

    const onSubmit = close => {
        const payload = {
            green: suppression.green + allocation.green,
            orange: suppression.orange + allocation.orange,
            purple: suppression.purple + allocation.purple,
            black: suppression.black + allocation.black,
        }

        dispatch({ type: 'UPDATE_SUPPRESSION', payload });
        cleanup(close);
    };

    return (
        <DialogTrigger>
            <ActionButton onPress={onAction}>
                <Relevance />
            </ActionButton>
            {(close) => (
                <Dialog>
                    <Heading>Suppression</Heading>
                    <Divider />
                    <Content>
                        <Text>
                            Suppression points remaining: {pointsRemaining}
                        </Text>
                        <Flex 
                            direction="row" 
                            justify-content="center"
                            alignItems="center"
                            gap="size-50"
                        >
                            <ColorBoxes 
                                allocation={allocation}
                                los={los}
                                increment={increment}
                                decrement={decrement}
                                pointsRemaining={pointsRemaining}
                            />
                            <ActionButton onPress={reset}>
                                Reset
                            </ActionButton>
                        </Flex>
                    </Content>
                    <ButtonGroup>
                        <Button 
                            variant="secondary" 
                            onPress={() => onCancel(close)}
                        >
                            Cancel
                        </Button>
                        <Button 
                            variant="cta" 
                            onPress={() => onSubmit(close)} 
                            isDisabled={pointsRemaining !== 0}
                            autoFocus
                        >
                            Confirm
                        </Button>
                    </ButtonGroup>
                </Dialog>
            )}
        </DialogTrigger>
    );
};

export default Suppress;
