import { History } from 'history';
import { createStore } from 'redux';
import CombinedReducers from './reducers';

// tslint:disable-next-line
declare var window: any;

/**
 * Returns the default store for the application
 */
export const createDefaultStore = (history: History) => {
    return createStore(
        CombinedReducers(history),
        {},
        window.devToolsExtension ? window.devToolsExtension() : undefined,
    );
};
