import { call, put } from 'redux-saga/effects';
import { services } from '../services';
import { Creators as SearchActions } from '../actions/searchGames';

export function* getGames(): any {
    try {
        const gameList = yield call(services.getGames);

        yield put(SearchActions.searchGamesSuccess(gameList.data));

        return;
    } catch (err) {
        yield put(SearchActions.searchGamesFailed());
    }
}

export function* filterGames(action: any): any {
    try {
        const gameList = yield call(services.filterGames, action.array);

        yield put(SearchActions.filterGamesSucces(gameList.data));

        return;
    } catch (err) {
        console.log(err);
        yield put(SearchActions.searchGamesFailed());
    }
}

export function* getEspecificGame(action: any): any {
    try {
        const game = yield call(services.getEspecificGame, action.genre);

        yield put(SearchActions.getEspecificGameSuccess(game.data));

        return;
    } catch (err) {
        console.log(err);
        yield put(SearchActions.searchGamesFailed());
    }
}
