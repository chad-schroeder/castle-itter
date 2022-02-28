import React, { useState }          from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEligibleCommand } from 'Utils/Units/defenders';

import { Flex, Picker, Item, Divider, ToggleButton } from '@adobe/react-spectrum';

const Command = ({ unit }) => {
    const { defenders } = useSelector(state => state.units);

    const [defender, setDefender] = useState(null);

    const dispatch = useDispatch();

    const localeDefenders = getEligibleCommand(unit);

    const onSelectedDefender = id => {
        const defender = defenders.find(defender => defender.id === id);
        setDefender(defender);
    };

    const onCommand = (command) => {
        const payload = {
            ...defender,
            commanded: true,
            [command]: false,
        }

        dispatch({ type: 'UPDATE_DEFENDER', payload });
    };
        
    return (
        <>
            <Flex 
                direction="row" 
                justifyContent="center" 
                alignItems="center" 
                gap="size-100"
            >
                <Picker
                    label="Command"
                    labelPosition="side" 
                    labelAlign="end"
                    placeholder="Select a defender"
                    items={localeDefenders}
                    onSelectionChange={(selected) => onSelectedDefender(selected)}
                >
                    {(item) => <Item>{item.name}</Item>}
                </Picker>

                {defender && (
                    <>
                        <Divider orientation="vertical" size="S" />
                        {defender.exhausted && (
                            <ToggleButton
                                isEmphasized
                                onChange={() => onCommand('exhausted')}
                                aria-label="Remove exhaustion"
                            >
                                Exhaustion
                            </ToggleButton>
                        )}
                        {defender.disrupted && (
                            <ToggleButton
                                isEmphasized
                                onChange={() => onCommand('disrupted')}
                                aria-label="Remove disruption"
                            >
                                Disruption
                            </ToggleButton>
                        )}
                    </>
                )}
            </Flex>
        </>
    );
};

export default Command;
