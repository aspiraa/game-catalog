import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    column-gap: 30px;
    grid-column: span 2;

    @media (min-width: 0px) and (max-width: 800px) {
        flex-wrap: wrap;
        gap: 10px;
    }
`;

export const CheckBoxContainer = styled.div`
    height: 68.5vh;
    width: 270px;
    background-color: #282828;
    padding: 50px 0 0 10px;
    color: white;

    h3 {
        margin: 20px 0;
    }

    @media (min-width: 0px) and (max-width: 800px) {
        position: absolute;
        height: 100%;
        width: 92%;
        padding-top: 70px;
    }
`;
