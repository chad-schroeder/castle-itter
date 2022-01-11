import React from 'react';
import { useSelector } from 'react-redux';

import { info } from '../../Utils/Libs/info';

import { View } from '@adobe/react-spectrum'

const getDeploymentMessage = (phase, location) => {
    switch(location) {
        case 'C':
            if (phase === 'Deployment') {
                return info['inactive_cellar'];
            }
            return info['active_cellar'];
        case 'R':
            if (phase === 'Reinforcement') {
                return info['active_reinforcement'];
            }
            return info['inactive_reinforcement'];
        case 'D':
            return info['active_deployment'];
        default:
            if (phase === 'Deployment') {
                return info['inactive_deployment'];
            }
            return [];
    }
};

export const MessageBox = ({ unit, phase }) => {
    const { location } = unit;

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            padding="size-250"
        >
            {getDeploymentMessage(phase, location).map(item => <p key={item}>{item}</p>)}
        </View>
    );
};

export default MessageBox;
