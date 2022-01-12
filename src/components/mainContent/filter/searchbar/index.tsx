import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { GameListType } from '../../../../store/reducers/types';

import { SearchContainer } from './style';

interface IProps {
    gameList: GameListType[];
    setFilter: (value: React.SetStateAction<GameListType[]>) => void;
}

const SearchBar = ({ gameList, setFilter }: IProps) => {
    const nameFilter = (e: string) => {
        if (e.length > 0) {
            const filtered = gameList.filter((item) =>
                item.title.toLowerCase().startsWith(e.toLowerCase()),
            );
            return filtered;
        }
        return gameList;
    };

    return (
        <SearchContainer id="search-bar">
            <input
                type="text"
                id="searchInput"
                autoComplete="off"
                placeholder="Game Name"
                onChange={(e) => setFilter(nameFilter(e.target.value))}
            />
            <i>
                <BsSearch />
            </i>
        </SearchContainer>
    );
};

export default SearchBar;
