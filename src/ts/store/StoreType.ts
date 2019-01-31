import { RouterState } from 'connected-react-router';
import { IFeed } from '../definitions/IFeed';

export interface IApplicationState {
    app: IAppStoreState;
    router: RouterState;
}

export interface IAppStoreState {
    feeds: IFeed[];
    darkmode: boolean;
}
