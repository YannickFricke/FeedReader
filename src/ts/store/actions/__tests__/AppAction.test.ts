import {FETCH_FEEDS} from '../AppAction';

it('Checks the FetchFeeds action', () => {
    const result = FETCH_FEEDS();

    // The result should not be undefined
    expect(result).not.toBeUndefined();
    
    // Check if the results matches
    expect(result).toMatchObject({
		status: 'STATUS_FETCH_FEEDS',
		type: 'FETCHING_FEEDS',
	});
});
