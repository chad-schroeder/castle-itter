import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ColorBoxes from './ColorBoxes';

import { isInspired } from '../../Utils/Units/checks';

import { 
    ActionButton, DialogContainer, Dialog, Heading, Content, Divider, Text, Button, ButtonGroup, Flex,
} from '@adobe/react-spectrum';

const Suppress = ({ unit }) => {
    const { currentAction, suppression } = useSelector(state => state.app);
    const { suppress, los } = unit;
    let suppressVal = suppress;

    const initialAllocation = {
        green: 0,
        orange: 0,
        purple: 0,
        black: 0,
    };

    if (isInspired(unit)) {
        suppressVal += 1;
    }

    const [allocation, setAllocation] = useState(initialAllocation);
    const [pointsRemaining, setpointsRemaining] = useState(suppressVal);
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
        setpointsRemaining(suppressVal);
    }

    const onClose = () => {
        // clear action; close dialog
        dispatch({ type: 'UNSET_CURRENT_ACTION' });

        // reset values
        setAllocation(initialAllocation);
        setpointsRemaining(suppressVal);
    };

    const onConfirm = () => {
        const payload = {
            green: suppression.green + allocation.green,
            orange: suppression.orange + allocation.orange,
            purple: suppression.purple + allocation.purple,
            black: suppression.black + allocation.black,
        }

        // allocate Suppression points
        dispatch({ type: 'UPDATE_SUPPRESSION', payload });

        // mark defender as ordered
        dispatch({ 
            type: 'UPDATE_DEFENDER',
            payload: {
                ...unit,
                ordered: true,
            },
        });

        onClose();
    };

    return (
        <DialogContainer>
            {currentAction === 'Suppress' &&
                <Dialog>
                    <Heading>Suppress</Heading>
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
                        <Button variant="secondary" onPress={onClose}>
                            Cancel
                        </Button>
                        <Button 
                            variant="cta" 
                            onPress={onConfirm} 
                            isDisabled={pointsRemaining !== 0}
                        >
                            Confirm
                        </Button>
                    </ButtonGroup>
                </Dialog>
            }
      </DialogContainer>
    );
}

export default Suppress;
