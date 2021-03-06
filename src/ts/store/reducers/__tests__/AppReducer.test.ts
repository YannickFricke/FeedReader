import { Action } from 'redux';
import { TOGGLE_DARKMODE } from '../../actions/AppAction';
import { AppReducer, initialState } from '../AppReducer';

const emptyAction: Action = {
    type: '',
};

describe('AppReducer', () => {
    it('Returns the initial state when no state was given', () => {
        const result = AppReducer(undefined, emptyAction);

        // The reducer must always return the initial state when no state was given
        expect(result).not.toBeUndefined();
        expect(result).toBe(initialState);
    });

    it('Returns the current state when no action was given', () => {
        const result = AppReducer(initialState, emptyAction);

        // The reducer should always return the current state when no action was given
        expect(result).not.toBeUndefined();
        expect(result).toBe(initialState);
    });

    it('should return the toggled dark mode', () => {
        const reducer = AppReducer(initialState, TOGGLE_DARKMODE);

        expect(reducer.darkmode).toBe(true);
    });
});
