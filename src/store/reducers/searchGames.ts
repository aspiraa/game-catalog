/* eslint-disable import/no-unresolved */

import { Types as SearchTypes } from '../actions/searchGames';
import { SEARCH_STATE } from './types';

const initialState: SEARCH_STATE = {
    gameList: [],
    game: {
        id: 'loading',
        title: 'loading',
        thumbnail: 'loading',
        short_description: 'loading',
        description: 'loading',
        game_url: 'loading',
        genre: 'loading',
        platform: 'loading',
        release_date: 'loading',
        minimum_system_requirements: {
            os: 'loading',
            processor: 'loading',
            memory: 'loading',
            graphics: 'loading',
            storage: 'loading',
        },
        screenshots: [
            {
                id: 'loading',
                image: 'loading',
            },
        ],
    },
    gamesFiltered: [],
};

const searchGames = (state = initialState, action: any): SEARCH_STATE => {
    if (action.type === SearchTypes.SEARCH_GAMES_SUCCESS) {
        return {
            ...state,
            gameList: action.gameList,
        };
    }

    if (action.type === SearchTypes.FILTER_GAMES_SUCCESS) {
        return {
            ...state,
            gameList: action.gameList,
        };
    }

    if (action.type === SearchTypes.GET_ESPECIFIC_GAME_REQUEST) {
        return {
            ...state,
            game: initialState.game,
        };
    }

    if (action.type === SearchTypes.GET_ESPECIFIC_GAME_SUCCESS) {
        return {
            ...state,
            game: action.game,
        };
    }
    if (action.type === SearchTypes.FILTERED_GAMES_STORE) {
        return {
            ...state,
            gamesFiltered: action.gamesFiltered,
        };
    }
    return state;
};

export default searchGames;
