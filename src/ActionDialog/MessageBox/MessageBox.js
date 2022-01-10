import React from 'react';
import { useSelector } from 'react-redux';

import { info } from '../../Utils/Libs/info';

import { View } from '@adobe/react-spectrum'

const getDeploymentMessage = (location) => {
    switch(location) {
        case 'C':
            return info['inactive_cellar'];
        case 'R':
            return info['inactive_reinforcement'];
        case 'D':
            return info['active_deployment'];
        default:
            return info['inactive_deployment'];
    }
};

export const MessageBox = ({ unit }) => {
    const { location } = unit;

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            padding="size-250"
        >
            <p>{getDeploymentMessage(location)}</p>
        </View>
    );
};

export default MessageBox;
