import { Action } from 'redux';

/**
 * Contains all properties for the actions
 */
export interface IAppAction extends Action {
    status?: string;
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
