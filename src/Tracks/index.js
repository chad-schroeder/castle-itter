import React from 'react';
import { useSelector }     from 'react-redux';

import Track from '../Track';

import { Heading, View, } from '@adobe/react-spectrum';

import { StyledTracks } from './styled';

const Tracks = () => {
    const { tracks } = useSelector(state => state.map);

    const renderTracks = tracks.map(track => <Track key={track.id} track={track} />);
    
    return (
        <View
            borderWidth="thin"
            borderColor="dark"
            borderRadius="medium"
            paddingY="size-150"
            paddingX="size-200"
        >
            <Heading level={2} marginBottom="size-100">Tracks</Heading>
            <StyledTracks>
                {renderTracks}
            </StyledTracks>
        </View>
    );
};

export default Tracks;
