import { Action } from 'redux';
import { IFeed } from '../../definitions/IFeed';

/**
 * Contains all properties for the actions
 */
export interface IAppAction extends Action {
    status?: string;
    feed?: IFeed;
}

/**
 * Updates all known feeds
 */
export const FETCH_FEEDS: IAppAction = {
    status: 'STATUS_FETCH_FEEDS',
    type: 'FETCHING_FEEDS',
};

/**
 * Toggles the darkmode of the application
 */
export const TOGGLE_DARKMODE: Action = {
    type: 'TOGGLE_DARKMODE',
};

export const ADD_FEED = (feed: IFeed) => {
    return {
        type: 'ADD_FEED',
        feed,
    };
};
