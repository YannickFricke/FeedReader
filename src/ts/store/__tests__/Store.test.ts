import { initialState } from '../reducers/AppReducer';
import { createDefaultStore } from '../Store';

// Declare the "global" variable as type "any" for testing purposes
// tslint:disable-next-line:no-any
declare var global: any;

describe('Store tests', () => {
    it('returns an store with devtools', () => {
        global.window = {
            devToolsExtension: jest.fn(),
        };

        const result = createDefaultStore();

        expect(result).not.toBeUndefined();
        expect(result.getState()).toMatchObject(initialState);
    });

    it('returns an store without devtools', () => {
        global.window = {
            devToolsExtension: undefined,
        };

        const result = createDefaultStore();

        expect(result).not.toBeUndefined();
        expect(result.getState()).toMatchObject(initialState);
    });
});
