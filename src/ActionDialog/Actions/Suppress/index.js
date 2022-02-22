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
    const [points, setPoints] = useState(suppress);
    const dispatch = useDispatch();

    const increment = color => {
        setAllocation({
            ...allocation,
            [color]: allocation[color] + 1,
        });
        setPoints(points - 1);
    };

    const decrement = color => {
        let value = allocation[color] <= 0 ? 0 : 1;

        setAllocation({
            ...allocation,
            [color]: allocation[color] - value,
        });
        setPoints(points + value);
    };

    const reset = () => {
        setAllocation(initialAllocation);
        setPoints(suppress);
    }

    const cleanup = close => {
        // dismiss dialog
        close(); 

        // reset allocation + points
        setAllocation(initialAllocation);
        setPoints(suppress);
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

        dispatch({
            type: 'UPDATE_SUPPRESSION',
            payload,
        });

        cleanup(close);
    };

    return (
        <DialogTrigger>
            <ActionButton>
                <Relevance />
            </ActionButton>
            {(close) => (
                <Dialog>
                    <Heading>Suppression</Heading>
                    <Divider />
                    <Content>
                        <Text>
                            Suppression points to spend: {points}
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
                                points={points}
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
                            isDisabled={points !== 0}
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
