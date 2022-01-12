import { GenreFilter, GameListType, IGame } from '../reducers/types';

export const Types = {
    SEARCH_GAMES_REQUEST: 'SEARCH_GAMES_REQUEST',
    SEARCH_GAMES_SUCCESS: 'SEARCH_GAMES_SUCCESS',
    SEARCH_GAMES_FAILED: 'SEARCH_GAMES_FAILED',

    FILTER_GAMES_REQUEST: 'FILTER_GAMES_REQUEST',
    FILTER_GAMES_SUCCESS: 'FILTER_GAMES_SUCCESS',

    GET_ESPECIFIC_GAME_REQUEST: 'GET_ESPECIFIC_GAME_REQUEST',
    GET_ESPECIFIC_GAME_SUCCESS: 'GET_ESPECIFIC_GAME_SUCCESS',

    FILTERED_GAMES_STORE: 'FILTERED_GAMES_STORE',
};

export const Creators = {
    searchGamesRequest: () => ({
        type: 'SEARCH_GAMES_REQUEST',
    }),

    searchGamesSuccess: (gameList: GameListType[]) => ({
        type: 'SEARCH_GAMES_SUCCESS',
        gameList,
    }),

    searchGamesFailed: () => ({
        type: 'SEARCH_GAMES_FAILED',
    }),

    filterGamesRequest: (array: GenreFilter[]) => ({
        type: 'FILTER_GAMES_REQUEST',
        array,
    }),

    filterGamesSucces: (gameList: GameListType[]) => ({
        type: 'FILTER_GAMES_SUCCESS',
        gameList,
    }),

    getEspecificGameRequest: (genre: string) => ({
        type: 'GET_ESPECIFIC_GAME_REQUEST',
        genre,
    }),
    getEspecificGameSuccess: (game: IGame) => ({
        type: 'GET_ESPECIFIC_GAME_SUCCESS',
        game,
    }),

    filteredGamesStore: (gamesFiltered: GameListType[]) => ({
        type: 'FILTERED_GAMES_STORE',
        gamesFiltered,
    }),
};
