import React from 'react';
import {
    CarouselItem,
    Container,
    ContentContainer,
    SlideButton,
    SlideContainer,
} from './style';

const Carousel: React.FC = () => {
    return (
        <Container>
            <ContentContainer>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </ContentContainer>

            <SlideContainer>
                <SlideButton />
                <SlideButton />
                <SlideButton />
            </SlideContainer>
        </Container>
    );
};

export default Carousel;
