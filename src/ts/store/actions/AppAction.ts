import {Action} from 'redux';

export interface IAppAction extends Action {
    status?: string;
}

export const FETCH_FEEDS: IAppAction = {
    status: 'STATUS_FETCH_FEEDS',
    type: 'FETCHING_FEEDS',
};

export const TOGGLE_DARKMODE: Action = {
    type: 'TOGGLE_DARKMODE',
};
