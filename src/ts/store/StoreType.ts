import { IFeed } from '../definitions/IFeed';

export interface IAppStoreState {
    feeds: IFeed[];
    darkmode: boolean;
}
