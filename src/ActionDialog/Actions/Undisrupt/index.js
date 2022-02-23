import React           from 'react';
import { useDispatch } from 'react-redux';

import { 
    ActionButton, DialogTrigger, Dialog, Heading, Content, Divider, Button, ButtonGroup,
} from '@adobe/react-spectrum';

import Heal from '@spectrum-icons/workflow/Heal';

const Undisrupt = ({ unit }) => {
    const { name, disrupted } = unit;

    const dispatch = useDispatch();

    const onSubmit = close => {
        dispatch({ 
            type: 'UPDATE_DEFENDER',
            payload: {
                ...unit,
                ordered: true,
                disrupted: false,
            },
        });

        dispatch({ type: 'UNSET_CURRENT_ACTION' });

        // dismiss dialog
        close();
    };

    if (disrupted) {
        return (
            <DialogTrigger>
                <ActionButton>
                    <Heal />
                </ActionButton>
                {(close) => (
                    <Dialog>
                        <Heading>Recover</Heading>
                        <Divider />
                        <Content>
                            Remove <strong>Disruption</strong> from {name}?
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

export default Undisrupt;
