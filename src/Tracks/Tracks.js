import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
    Heading, View, Flex, Cell, Column, Row, TableView, TableBody, TableHeader, 
} from '@adobe/react-spectrum';

const Tracks = () => {
    
    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2}>Tracks</Heading>
        </View>
    );
};

export default Tracks;
