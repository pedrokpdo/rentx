import React from 'react';
import { FlatList } from 'react-native';

import { CarImage, CarImageWrapper, Container, ImageIndex, ImageIndexes } from './styles';

interface Props {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
    return (
        <Container>
            <ImageIndexes>
                {
                    imagesUrl.map((_, index) => (
                        <ImageIndex
                            active={true}
                            key={String(index)}
                        />
                    ))
                }
            </ImageIndexes>
            <FlatList
                data={imagesUrl}
                keyExtractor={key => key}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage source={{ uri: item }} resizeMode='contain' />
                    </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />


        </Container>
    )
}