import React from 'react';

import { 
    toggleOrdered, toggleCommanded, toggleDisrupted, toggleExhaustion, toggleCasualty, 
} from '../../Utils/Units/update';

import { Flex, Heading, ToggleButton, } from '@adobe/react-spectrum';

const Toggles = ({ unit }) => {
    const { 
        id, 
        ordered,
        commanded,
        disrupted,
        exhausted,
        casualty,
    } = unit;

    return (
        <Flex direction="row" gap="size-100" alignItems="center">
            <Heading level={4}>Toggles</Heading>
            <ToggleButton 
                isSelected={exhausted}
                onPress={() => toggleExhaustion(id)}
            >
                Exhausted
            </ToggleButton>

            <ToggleButton 
                isSelected={ordered}
                onPress={() => toggleOrdered(id)}
            >
                Ordered
            </ToggleButton>

            <ToggleButton 
                isSelected={commanded}
                onPress={() => toggleCommanded(id)}
            >
                Commanded
            </ToggleButton>

            <ToggleButton 
                isSelected={disrupted}
                onPress={() => toggleDisrupted(id)}
            >
                Disrupted
            </ToggleButton>

            <ToggleButton 
                isSelected={casualty}
                onPress={() => toggleCasualty(id)}
            >
                Casualty
            </ToggleButton>
        </Flex>
    );
};

export default Toggles;
