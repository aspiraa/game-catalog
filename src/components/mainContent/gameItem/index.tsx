/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ItemContainer } from './style';

interface IProps {
    gameName: string;
    imgUrl: string;
    onclick: () => void;
}

const GameItem = ({ gameName, imgUrl, onclick }: IProps): JSX.Element => {
    return (
        <ItemContainer>
            <div onClick={onclick}>
                <figure>
                    <img src={imgUrl} alt="" />
                </figure>
            </div>
            <h2>{gameName}</h2>
        </ItemContainer>
    );
};

export default GameItem;
