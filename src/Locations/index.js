import React, { useState } from 'react';
import { useSelector }     from 'react-redux';

import Location from '../Location';

import { Heading, View } from '@adobe/react-spectrum';

import { StyledLocations } from './styled';

const convertLocationsToList = locations => {
    const list = [];
    Object.keys(locations).forEach(key => list.push(locations[key]));
    return list;
};

const Locations = () => {
    const { locations } = useSelector(state => state.map);

    const locales = convertLocationsToList(locations);

    const renderLocations = locales.map(locale => <Location key={locale.id} location={locale} />);

    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2}>Locations</Heading>
            <StyledLocations>
                {renderLocations}
            </StyledLocations>
        </View>
    );
};

export default Locations;
