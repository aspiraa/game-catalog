import { takeLatest, all, takeEvery } from 'redux-saga/effects';

import { Types as SearchTypes } from '../actions/searchGames';
import { filterGames, getGames, getEspecificGame } from './searchGames';

export default function* rootSaga(): any {
    return yield all([
        takeLatest(SearchTypes.SEARCH_GAMES_REQUEST, getGames),
        takeEvery(SearchTypes.FILTER_GAMES_REQUEST, filterGames),
        takeLatest(SearchTypes.GET_ESPECIFIC_GAME_REQUEST, getEspecificGame),
    ]);
}
