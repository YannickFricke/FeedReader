import { mount } from 'enzyme';
import * as React from 'react';
import ConnectedCurrentPost, { CurrentPost } from '../CurrentPost';

import { createMemoryHistory } from 'history';
import 'jest-enzyme';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import { IPost } from '../../definitions/IPost';
import { createDefaultStore } from '../../store/Store';

describe('CurrentPost', () => {
    it('should render with no post', () => {
        const result = mount(<CurrentPost currentPost={undefined} />);

        expect(result).toHaveLength(1);
    });

    it('should render with a post', () => {
        const post: IPost = {
            id         : 1,
            title      : 'Test post',
            description: 'Test post',
            publishDate: new Date(),
            author     : 'Test author',
            categories : [
                'test',
            ],
            link: 'https://example.com',
        };

        const result = mount(<CurrentPost currentPost={post} />);

        expect(result).toHaveLength(1);
    });

    describe('Connected to a store', () => {
        let store;

        beforeEach(() => {
            store = createDefaultStore(createMemoryHistory());
        });

        it('should render', () => {
            const result = mount(
                <Provider store={store}>
                    <ConnectedCurrentPost />
                </Provider>,
            );

            expect(result).toHaveLength(1);
        });
    });
});
