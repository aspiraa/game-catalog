import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    max-width: 870px;
    display: flex;
    flex-direction: column;
    margin: 35px auto 0 auto;
    gap: 15px;
`;

export const ContentContainer = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const CarouselItem = styled.div`
    height: 200px;
    max-width: 31%;
    flex: 1;
    background-color: #282828;
`;

export const SlideContainer = styled.ul`
    width: 70px;
    height: 16px;
    display: flex;
    gap: 10px;
    margin: 0 auto;
`;

export const SlideButton = styled.li`
    width: 16px;
    height: 16px;
    border-radius: 50px;
    background-color: #c4c4c4;
    border: 1px solid #000;
    list-style: none;
`;
