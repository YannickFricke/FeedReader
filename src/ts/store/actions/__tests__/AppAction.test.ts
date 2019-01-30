import {FETCH_FEEDS, TOGGLE_DARKMODE} from '../AppAction';

it('Checks the FetchFeeds action', () => {
    const result = FETCH_FEEDS;

    // The result should not be undefined
    expect(result).not.toBeUndefined();

    // Check if the results matches
    expect(result).toMatchObject({
        status: 'STATUS_FETCH_FEEDS',
        type: 'FETCHING_FEEDS',
    });
});

it('Checks the TOGGLE_DARKMODE action', () => {
    const result = TOGGLE_DARKMODE;

    expect(result).not.toBeUndefined();
    expect(result).toMatchObject({
        type: 'TOGGLE_DARKMODE',
    });
});
