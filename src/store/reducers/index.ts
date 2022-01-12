import { combineReducers } from 'redux';
import searchGames from './searchGames';

export default combineReducers({
    searchGames,
});

export type RootState = ReturnType<typeof searchGames>;
