import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import CheckBox from './checkBox';
import FilterCheckBoxButton from './filterCheckBoxButton';
import SearchBar from './searchbar';
import { CheckBoxContainer, FilterContainer } from './style';
import { Creators as SearchAction } from '../../../store/actions/searchGames';
import { GameListType } from '../../../store/reducers/types';
import { ApplicationState } from '../../../store';

export interface IFilter {
    inputName: string;
    paramType: string;
    checked?: boolean;
}
const mapStateToProps = (state: ApplicationState) => ({
    gamelist: state.searchGames.gameList,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(SearchAction, dispatch);
};

const Filter = () => {
    const dispatch = useDispatch();
    const { filterGamesRequest, filteredGamesStore } = SearchAction;
    const [filteredGames, setFilteredGames] = useState<GameListType[]>([]);
    const [visible, setVisible] = useState(false);
    const [style, setStyle] = useState({
        display: 'none',
    });

    const [filter, setFilter] = useState<IFilter[]>([]);
    const gameList: GameListType[] = useSelector(
        (state: ApplicationState) => state.searchGames.gameList,
    );

    // mostra e organiza os items em tela a depender se o filtro esta exibido ou não
    const searchBar = document.getElementById('search-bar');
    const gameContainer = document.getElementById('game-container');

    useEffect(() => {
        if (searchBar && gameContainer != null && visible === true) {
            searchBar.style.position = 'absolute';
            searchBar.style.color = '#FFF';
            gameContainer.style.gridColumn = '2/-1';
            setStyle({ display: 'block' });
        }
        if (searchBar && gameContainer != null && visible === false) {
            searchBar.style.position = 'inherit';
            searchBar.style.color = '#000';
            gameContainer.style.gridColumn = '1/-1';
            setStyle({ display: 'none' });
        }
    }, [visible]);

    // array com os generos disponiveis no filtro

    const platform = ['pc', 'browser'];

    const genre = [
        'MMO',
        'MMORPG',
        'shooter',
        'Strategy',
        'moba',
        'Battle-Royale',
        'Card',
        'Racing',
        'Sports',
        'Social',
        'Fighting',
    ];
    // Adiciona ou remove itens do filtro

    const gamesFilter = ({ inputName, paramType, checked }: IFilter) => {
        const checkbox = {
            inputName,
            paramType,
            checked,
        };

        if (filter.find((item) => item.inputName === inputName)) {
            if (!checkbox.checked) {
                setFilter(
                    filter.filter((item) => item.inputName !== inputName),
                );
            }
        } else if (checkbox.checked) {
            setFilter(filter.concat(checkbox));
        }
    };
    useEffect(() => {
        dispatch(filteredGamesStore(filteredGames));
    }, [filteredGames]);

    useEffect(() => {
        dispatch(filterGamesRequest(filter));
    }, [filter]);

    return (
        <FilterContainer>
            <SearchBar gameList={gameList} setFilter={setFilteredGames} />
            <CheckBoxContainer style={style}>
                <h3>Sorted by Platform:</h3>
                <div>
                    {platform.map((element) => {
                        return (
                            <CheckBox
                                inputName={element}
                                onchange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    return gamesFilter({
                                        inputName: element,
                                        paramType: 'platform',
                                        checked: e.target.checked,
                                    });
                                }}
                                key={element}
                            />
                        );
                    })}
                </div>

                <h3>Filter by Genre:</h3>
                <div>
                    {genre.map((element) => {
                        return (
                            <CheckBox
                                inputName={element}
                                onchange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    return gamesFilter({
                                        inputName: element,
                                        paramType: 'genre',
                                        checked: e.target.checked,
                                    });
                                }}
                                key={element}
                            />
                        );
                    })}
                </div>
            </CheckBoxContainer>
            <FilterCheckBoxButton onClick={() => setVisible(!visible)} />
        </FilterContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
