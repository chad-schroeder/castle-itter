import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Dice from '../../Dice';

import { isInspired } from '../../Utils/Units/checks';
import { rollDice } from '../../Utils/Libs/dice';

import { 
    DialogContainer, Dialog, Heading, Header, Content, Divider, Text, Button, ButtonGroup, Flex
} from '@adobe/react-spectrum';

const Attack = ({ unit }) => {
    const { currentAction, targetCounter } = useSelector(state => state.app);
    const [dice, setDice] = useState([]);
    const dispatch = useDispatch();

    const { name: targetName, defense } = targetCounter;
    let { attack } = unit;

    if (isInspired(unit)) {
        attack += 1;
    }

    const onRoll = () => {
        // roll number of dice equal to attack value
        const rolled = rollDice(attack);
        
        // store dice result
        setDice(rolled);
    };

    const renderDice = () => {
        const result = dice.map(val => <Dice num={val} />);
        return result;
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
                        <Heading>Attack: {targetName}</Heading>
                        <Header>Defense: {defense}</Header>
                        <Divider />
                        <Content>
                            <Flex direction="row" justifyContent="space-between" gap="size-100">
                                <Flex direction="column" gap="size-50">
                                    <Text>
                                        Number of dice: {attack}
                                    </Text>
                                    {/* <Text>{dice.length && 'Rolled!'}</Text> */}
                                </Flex>
                                <Flex direction="row" gap="size-100">
                                    {renderDice()}
                                </Flex>
                            </Flex>
                        </Content>
                        <ButtonGroup>
                            <Button variant="secondary" onPress={onCancel}>
                                Cancel
                            </Button>
                            <Button variant="cta" onPress={onRoll} autoFocus>
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
