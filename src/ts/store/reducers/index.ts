import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { AppReducer } from './AppReducer';

/**
 * Returns the combined reducers
 */
export default (history: History) => combineReducers({
    router: connectRouter(history),
    app: AppReducer,
});
