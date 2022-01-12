/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { connect, useSelector } from 'react-redux';

import { ApplicationState } from '../../../store';

import { IGame } from '../../../store/reducers/types';

import {
    Content,
    ModalContainer,
    ScreenshotContainer,
    ScreenshotContentContainer,
    Screenshot,
    Description,
    CustomSpan,
    MinRequirementsContainer,
    Header,
    SubHeader,
} from './style';

const mapStateToProps = (state: ApplicationState) => ({
    game: state.searchGames.game,
});

interface IProps {
    displayValue: string;
    closeModal: () => void;
}

const Modal = ({ displayValue, closeModal }: IProps) => {
    const style = {
        display: displayValue,
    };

    const game: IGame = useSelector(
        (state: ApplicationState) => state.searchGames.game,
    );

    return (
        <ModalContainer style={style}>
            <Content>
                <ScreenshotContainer>
                    <ScreenshotContentContainer>
                        {game.screenshots.map((item) => {
                            return (
                                <Screenshot key={item.id}>
                                    <img src={item.image} alt={game.title} />
                                </Screenshot>
                            );
                        })}
                    </ScreenshotContentContainer>
                </ScreenshotContainer>
                <Header>
                    <h1> {game.title} </h1>
                    <i onClick={closeModal}>
                        <IoReturnDownBackOutline size="32px" />
                    </i>
                    <div>
                        <a
                            href={game.game_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit game website <span>click here</span>
                        </a>
                    </div>
                </Header>
                <SubHeader>
                    <CustomSpan>{game.genre}</CustomSpan>
                    <CustomSpan>Realese data: {game.release_date}</CustomSpan>
                    <CustomSpan>Platform: {game.platform}</CustomSpan>
                </SubHeader>
                <Description>
                    <p dangerouslySetInnerHTML={{ __html: game.description }} />
                </Description>

                <MinRequirementsContainer>
                    <h2>Minimum system requirements : </h2>
                    <div>os: {game.minimum_system_requirements.os}</div>
                    <div>
                        processor: {game.minimum_system_requirements.processor}
                    </div>
                    <div>memory: {game.minimum_system_requirements.memory}</div>
                    <div>
                        graphics: {game.minimum_system_requirements.graphics}
                    </div>
                    <div>
                        storage: {game.minimum_system_requirements.storage}
                    </div>
                </MinRequirementsContainer>
            </Content>
        </ModalContainer>
    );
};

export default connect(mapStateToProps, null)(Modal);
