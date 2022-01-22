import React from 'react';

import { Grid, Flex, Heading, View, } from '@adobe/react-spectrum';

import { StyledContainer, } from './styled';

const GamePanel = () => {
    return (
        <StyledContainer>
            <Grid
                areas={[
                    'unit content info',
                    'unit content info',
                    'unit content info'
                ]}
                columns={['1fr', '3fr', '2fr']}
                rows={['auto']}
                gap="size-100"
            >
                <View
                    gridArea="unit"
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-100"
                >
                    <View 
                        padding="size-50" 
                        minHeight={200}
                        backgroundColor="gray-300" 
                        borderRadius="medium"
                    >
                        <Grid
                            areas={[
                                'photo stats',
                                'nationality stats',
                                'something stats'
                            ]}
                            columns={['80px', '1fr']}
                            rows={['80px', '40px', 'auto']}
                            gap="size-50"
                        >
                            <View 
                                gridArea="photo"
                                backgroundColor="gray-500" 
                                borderRadius="medium"
                            />
                            <View 
                                gridArea="nationality"
                                backgroundColor="gray-400" 
                                borderRadius="medium"
                            />
                            <View 
                                gridArea="stats"
                                padding="size-100"
                                borderRadius="medium"
                            >
                                <Heading level={4}>Petrukovich</Heading>
                                <p>Attack</p>
                                <p>Defense</p>
                                <p>Location</p>
                                <p>Commander</p>
                                <p>Tanker</p>
                            </View>
                        </Grid>
                    </View>
                </View>
                <View
                    gridArea="content"
                    backgroundColor={'static-white'}
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-250"
                >

                </View>
                <View
                    gridArea="info"
                    backgroundColor={'static-white'}
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-250"
                >

                </View>
            </Grid>
        </StyledContainer>
    );
};

export default GamePanel;
