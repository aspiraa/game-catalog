import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Filter from './filter';
import GameItem from './gameItem';
import { GameContainer, MainContentContainer } from './style';

import { Creators as SearchAction } from '../../store/actions/searchGames';
import { GameListType } from '../../store/reducers/types';
import { ApplicationState } from '../../store';
import Modal from './modal';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(SearchAction, dispatch);
};
const mapStateToProps = (state: ApplicationState) => ({
    gamelist: state.searchGames.gameList,
    gamelistFiltered: state.searchGames.gamesFiltered,
});

const MainContent: React.FC = () => {
    const [display, setDisplay] = useState<string>('none');

    const dispatch = useDispatch();
    const { searchGamesRequest, getEspecificGameRequest } = SearchAction;

    const gameList: GameListType[] = useSelector(
        (state: ApplicationState) => state.searchGames.gameList,
    );
    const gameListFiltered: GameListType[] = useSelector(
        (state: ApplicationState) => state.searchGames.gamesFiltered,
    );

    const getEspecifGame = (genre: string) => {
        dispatch(getEspecificGameRequest(genre));
    };

    useEffect(() => {
        dispatch(searchGamesRequest());
    }, []);

    const setHtml = (list: GameListType[]) => {
        return list.length > 0 ? (
            list.map((item) => {
                return (
                    <GameItem
                        gameName={item.title}
                        imgUrl={item.thumbnail}
                        key={item.title}
                        onclick={() => {
                            getEspecifGame(item.id);
                            setDisplay('block');
                        }}
                    />
                );
            })
        ) : (
            <h2>Nenhum jogo localizado</h2>
        );
    };

    return (
        <>
            <Modal
                displayValue={display}
                closeModal={() => {
                    setDisplay('none');
                }}
            />

            <MainContentContainer>
                <Filter />
                <GameContainer id="game-container">
                    {setHtml(
                        gameListFiltered.length > 0
                            ? gameListFiltered
                            : gameList,
                    )}
                </GameContainer>
            </MainContentContainer>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
