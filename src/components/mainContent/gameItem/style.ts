import styled from 'styled-components';

export const ItemContainer = styled.div`
    height: 185px;
    max-width: 270px;
    min-width: 23%;
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 15px;
    flex: 1;
    margin-bottom: 15px;
    cursor: pointer;

    div {
        height: 90%;
        background-color: #000;
    }

    figure {
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    @media (min-width: 0px) and (max-width: 800px) {
        min-width: 40%;

        h2 {
            font-size: 17px;
        }
    }
`;
