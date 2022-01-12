import { compose, createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import { SEARCH_STATE } from './reducers/types';
import sagas from './sagas';

export interface ApplicationState {
    searchGames: SEARCH_STATE;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ApplicationState> = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export default store;
