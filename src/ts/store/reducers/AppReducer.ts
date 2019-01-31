import { IAppAction } from '../actions/AppAction';
import { IAppStoreState } from '../StoreType';

/**
 * The initial state of the application
 */
export const initialState: IAppStoreState = {
    feeds: [],
    darkmode: false,
};

/**
 * The reducer for the application
 *
 * @param state Undefined for the initial state or the current state
 */
export function AppReducer(state: IAppStoreState|undefined, action: IAppAction): IAppStoreState {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case 'TOGGLE_DARKMODE':
            return {
                ...state,
                darkmode: !state.darkmode,
            };
    }

    return state;
}
