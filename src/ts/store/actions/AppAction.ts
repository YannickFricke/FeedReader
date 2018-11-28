import {Action} from 'redux';

export interface IAppAction extends Action {
	status?: string;
}

export const FETCH_FEEDS = () => {
	return {
		status: 'STATUS_FETCH_FEEDS',
		type: 'FETCHING_FEEDS',
	};
};
