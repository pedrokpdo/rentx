import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { CarImage, CarImageWrapper, Container, ImageIndex, ImageIndexes } from './styles';

interface Props {
    imagesUrl: {
        id: string;
        photo: string;
    }[];
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
                    imagesUrl.map((item, index) => (
                        <ImageIndex
                            active={index === imageIndex}
                            key={String(item.id)}
                        />
                    ))
                }
            </ImageIndexes>
            <FlatList
                data={imagesUrl}
                onViewableItemsChanged={indexChanged.current}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage source={{ uri: item.photo }} resizeMode='contain' />
                    </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />


        </Container>
    )
}