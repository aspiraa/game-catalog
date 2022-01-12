import styled from 'styled-components';

export const MainContentContainer = styled.section`
    gap: 20px 30px;
    margin-top: 25px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 30px 1fr;

    @media (min-width: 0px) and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

export const GameContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    grid-row: 2;
    grid-column: 1/-1;
    height: 63vh;
    overflow: auto;
    overflow-x: hidden;
    padding-right: 5px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
