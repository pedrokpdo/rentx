import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { CarImage, CarImageWrapper, Container, ImageIndex, ImageIndexes } from './styles';

interface Props {
    imagesUrl: string[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
    const [imageIndex, setIndexImage] = useState(0)

    const indexChanged = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!
        setIndexImage(index)
    })

    return (
        <Container>
            <ImageIndexes>
                {
                    imagesUrl.map((_, index) => (
                        <ImageIndex
                            active={index === imageIndex}
                            key={String(index)}
                        />
                    ))
                }
            </ImageIndexes>
            <FlatList
                data={imagesUrl}
                onViewableItemsChanged={indexChanged.current}
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