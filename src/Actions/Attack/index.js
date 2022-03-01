import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isInspired } from '../../Utils/Units/checks';

import { 
    DialogContainer, Dialog, Heading, Header, Content, Divider, Text, Button, ButtonGroup
} from '@adobe/react-spectrum';

const Attack = ({ unit }) => {
    let { attack } = unit;
    const { currentAction, targetCounter } = useSelector(state => state.app);
    const { name: targetName, defense } = targetCounter;
    const dispatch = useDispatch();

    if (isInspired(unit)) {
        attack += 1;
    }

    const onConfirm = () => {
        console.log('Roll dice!');
    };

    const onCancel = () => {
        dispatch({ type: 'SET_TARGET_COUNTER', payload: null });
        dispatch({ type: 'UNSET_CURRENT_ACTION' });
    };

    if (attack > 0) {
        return (
            <DialogContainer>
                {(currentAction === 'Attack' && targetCounter) &&
                    <Dialog>
                        <Heading>Attack {targetName}</Heading>
                        <Header>Attack dice: {attack}</Header>
                        <Divider />
                        <Content>
                            <Text>
                               Needed to hit: {defense}
                            </Text>
                        </Content>
                        <ButtonGroup>
                            <Button variant="secondary" onPress={onCancel}>
                                Cancel
                            </Button>
                            <Button variant="cta" onPress={onConfirm} autoFocus>
                                Roll
                            </Button>
                        </ButtonGroup>
                    </Dialog>
                }
            </DialogContainer>
        );
    }
    
    return null;
};

export default Attack;
