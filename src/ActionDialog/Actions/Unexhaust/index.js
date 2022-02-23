import React           from 'react';
import { useDispatch } from 'react-redux';

import { 
    ActionButton, DialogTrigger, Dialog, Heading, Content, Divider, Button, ButtonGroup,
} from '@adobe/react-spectrum';

import RotateCCW from '@spectrum-icons/workflow/RotateCCW';

const Unexhaust = ({ unit }) => {
    const { name, exhausted } = unit;

    const dispatch = useDispatch();

    const onSubmit = close => {
        dispatch({ 
            type: 'UPDATE_DEFENDER',
            payload: {
                ...unit,
                ordered: true,
                exhausted: false,
            },
        });

        dispatch({ type: 'UNSET_CURRENT_ACTION' });

        // dismiss dialog
        close();
    };

    if (exhausted) {
        return (
            <DialogTrigger>
                <ActionButton>
                    <RotateCCW />
                </ActionButton>
                {(close) => (
                    <Dialog>
                        <Heading>Unexhaust</Heading>
                        <Divider />
                        <Content>
                            Remove <strong>Exhaustion</strong> from {name}?
                        </Content>
                        <ButtonGroup>
                            <Button variant="secondary" onPress={close}>
                                Cancel
                            </Button>
                            <Button variant="cta" onPress={() => onSubmit(close)} autoFocus>
                                Confirm
                            </Button>
                        </ButtonGroup>
                    </Dialog>
                )}
            </DialogTrigger>
        );
    }
    return null;
};

export default Unexhaust;
