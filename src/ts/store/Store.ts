import {createStore} from 'redux';
import {AppReducer, initialState} from './reducers/AppReducer';

// tslint:disable-next-line
declare var window: any;

/**
 * Returns the default store for the application
 */
export const createDefaultStore = () => {
    return createStore(AppReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);
};
