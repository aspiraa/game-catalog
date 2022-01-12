import styled from 'styled-components';

export const SearchContainer = styled.div`
    height: 30px;
    width: 270px;
    display: flex;
    align-items: center;
    z-index: 1;

    input {
        width: 100%;
        height: 30px;
        border: none;
        border-bottom: 2px solid #635e5e;
        padding: 5px 5px 5px 10px;
        background: none;
        color: inherit;

        &:focus {
            outline: none;
            box-shadow: none;
        }
        &::placeholder {
            font-family: 'Roboto', sans-serif;
        }
    }
    i {
        position: relative;
        left: -25px;
        top: 1px;
        color: #635e5e;
        width: 0;
    }

    @media (min-width: 0px) and (max-width: 800px) {
        position: initial !important;
        width: 100%;
    }
`;
