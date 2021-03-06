import { RouterState } from 'connected-react-router';
import { IFeed } from '../definitions/IFeed';
import { IPost } from '../definitions/IPost';

export interface IApplicationState {
    /**
     * Contains the application state
     */
    app: IAppStoreState;

    /**
     * Contains the router state
     */
    router: RouterState;
}

export interface IAppStoreState {
    /**
     * Contains all loaded feeds
     */
    feeds: IFeed[];

    /**
     * When set to true the app will be displayed with dark components and dark backgrounds
     */
    darkmode: boolean;

    /**
     * Contains the current active post
     */
    currentPost: IPost | undefined;
}
