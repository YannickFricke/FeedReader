import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { AppReducer } from './AppReducer';

export default (history: History) => combineReducers({
    router: connectRouter(history),
    app: AppReducer,
});
