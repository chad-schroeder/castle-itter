import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
    DialogContainer, Dialog, Heading, Content, Divider, Text, Button, ButtonGroup
} from '@adobe/react-spectrum';

const Recover = ({ unit }) => {
    const { currentAction } = useSelector(state => state.app);
    const { name } = unit;
    const dispatch = useDispatch();

    const onConfirm = () => {
        dispatch({ 
            type: 'UPDATE_DEFENDER',
            payload: {
                ...unit,
                ordered: true,
                exhausted: false,
            },
        });

        dispatch({ type: 'UNSET_CURRENT_ACTION' });
        dispatch({ type: 'UNSET_ACTIVE_DEFENDER_ID' });
    };

    const onCancel = () => {
        dispatch({ type: 'UNSET_CURRENT_ACTION' });
    };

    return (
        <DialogContainer>
            {currentAction === 'Recover' &&
                <Dialog>
                    <Heading>Recover</Heading>
                    <Divider />
                    <Content>
                        <Text>
                            Remove <strong>Exhaustion</strong> from {name}?
                        </Text>
                    </Content>
                    <ButtonGroup>
                        <Button variant="secondary" onPress={onCancel}>
                            Cancel
                        </Button>
                        <Button variant="cta" onPress={onConfirm} autoFocus>
                            Confirm
                        </Button>
                    </ButtonGroup>
                </Dialog>
            }
        </DialogContainer>
    );
};

export default Recover;
