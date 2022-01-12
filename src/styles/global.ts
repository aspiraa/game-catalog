import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }
  body{
    position: relative;
    background-color: #DCDCDC;
  }
`;

export const GlobalContainer = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    overflow: hidden;
`;
