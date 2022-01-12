import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: block;
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 101%;
    background-color: #000;
    color: white;
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    background-color: #000;
`;

/** Screen shot  */

export const ScreenshotContainer = styled.section`
    width: 100%;
    max-height: 220px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    margin: 35px auto 30px auto;
    gap: 15px;

    overflow: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar {
        height: 8px;
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

export const ScreenshotContentContainer = styled.div`
    height: 90%;
    width: 100%;
    gap: 30px;
    display: flex;
    justify-content: space-between;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Screenshot = styled.div`
    height: 200px;
    min-width: 300px;
    flex: 1;
    background-color: #282828;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    h1 {
        margin-bottom: 15px;
    }

    i {
        cursor: pointer;
    }

    div {
        width: 100%;
    }
    a {
        text-decoration: none;

        color: #fff;

        &:visited {
            color: inherit;
        }

        span {
            color: #00dcff;
        }
    }
`;

export const SubHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CustomSpan = styled.span`
    border: 1px solid;
    border-radius: 10px;
    padding: 6px;
    margin: 10px;
    margin-left: 0;
    background-color: #328f37;
    font-size: 12px;
    box-shadow: 0 0 1px 0px white;
`;

export const Description = styled.div`
    max-width: 100%;
    margin-top: 45px;
    line-height: 1.4rem;
`;

export const MinRequirementsContainer = styled.div`
    max-width: 100%;

    margin: 50px 0;
    line-height: 1.4rem;

    h2 {
        margin-bottom: 15px;
    }
`;
