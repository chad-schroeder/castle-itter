import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { canEscape, isEscapeLocation, hasEscapeRoute } from '../../Utils/Units/checks';

import { 
    DialogContainer, Dialog, Heading, Content, Divider, Button, ButtonGroup
} from '@adobe/react-spectrum';

import { StyledLi } from './styled';

const Escape = ({ unit }) => {
    const { currentAction } = useSelector(state => state.app);
    const { los, location } = unit;
    const dispatch = useDispatch();
    const escapePossible = canEscape(unit);

    const onEscape = () => {
        dispatch({ 
            type: 'UPDATE_DEFENDER',
            payload: {
                ...unit,
                tile: null,
                location: null,
            },
        });
        dispatch({ type: 'BOROTRA_ESCAPED' });
        dispatch({ type: 'UNSET_CURRENT_ACTION' });
    };

    const onCancel = () => {
        dispatch({ type: 'UNSET_CURRENT_ACTION' });
    };

    return (
        <DialogContainer>
            {currentAction === 'Escape' &&
                <Dialog>
                    <Heading>Escape</Heading>
                    <Divider />
                    <Content>
                        {escapePossible && <p>The path is clear: Borotra can escape!</p>}
                        {!escapePossible && (
                            <>
                                <Heading level={4}>Conditions not met:</Heading>
                                <ul>
                                    {!hasEscapeRoute(los) && (
                                        <StyledLi>Borotra has no cleared escape path.</StyledLi>
                                    )}
                                    {!isEscapeLocation(location) && (
                                        <StyledLi>Borotra cannot escape from the <strong>Cellar</strong> or <strong>Great Hall</strong>.</StyledLi>
                                    )}
                                </ul>
                            </>
                        )}
                    </Content>
                    <ButtonGroup>
                        <Button variant="secondary" onPress={onCancel}>
                            Close
                        </Button>
                        {escapePossible &&
                            <Button variant="cta" onPress={onEscape} autoFocus>
                                Escape
                            </Button>
                        }                   
                    </ButtonGroup>
                </Dialog>
            }
        </DialogContainer>
    );
};

export default Escape;
