/* eslint-disable camelcase */

export type SEARCH_STATE = {
    gameList: GameListType[];
    gamesFiltered: GameListType[];
    game: IGame;
};

export type GameListType = {
    id: string;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
    release_date: string;
};

export type SERACH_GAMES_LIST = {
    type: 'SEARCH_GAME_LIST';
    gameList: GameListType[];
};

export type GenreFilter = {
    inputName: string;
    paramType: string;
};

export interface IGame extends GameListType {
    description: string;
    game_url: string;
    minimum_system_requirements: {
        os: string;
        processor: string;
        memory: string;
        graphics: string;
        storage: string;
    };
    screenshots: Array<{
        id: string;
        image: string;
    }>;
}

export type TypesAction = SERACH_GAMES_LIST;
