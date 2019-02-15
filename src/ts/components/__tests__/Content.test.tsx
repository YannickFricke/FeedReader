import * as React from 'react';

import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import 'jest-enzyme';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import { IPost } from '../../definitions/IPost';
import { ADD_FEED } from '../../store/actions/AppAction';
import { createDefaultStore } from '../../store/Store';
import ConnectedContent,  { Content } from '../Content';

describe('Content', () => {
    describe('without posts', () => {
        const posts: IPost[] = [];

        it('should render', () => {
            const result = mount(<Content posts={posts} />);

            expect(result).toHaveLength(1);
            expect(result).toIncludeText('No posts to display.');
        });

        it('should render the bright component as default', () => {
            const result = mount(<Content posts={posts} />);

            expect(result).toHaveStyleRule('border-right-color', '#212121');
        });

        it('should use the dark style when the darkmode is activated', () => {
            const result = mount(<Content posts={posts} theme={{darkmode: true}} />);

            expect(result).toHaveStyleRule('border-right-color', '#f0f0f0');
        });
    });

    describe('with posts', () => {
        const posts: IPost[] = [
            {
                id: 1,
                title: 'Sample post',
                description: 'A sample post',
                publishDate: new Date(),
                author: 'A test reporter',
                link: 'https://example.com',
                categories: ['test', 'sample'],
            },
        ];

        it('should render', () => {
            const result = mount(<Content posts={posts} />);

            expect(result).toHaveLength(1);
        });

        it('should render the bright component as default', () => {
            const result = mount(<Content posts={posts} />);

            expect(result).toHaveStyleRule('border-right-color', '#212121');
        });

        it('should use the dark style when the darkmode is activated', () => {
            const result = mount(<Content posts={posts} theme={{darkmode: true}} />);

            expect(result).toHaveStyleRule('border-right-color', '#f0f0f0');
        });
    });

    describe('with a provided store', () => {
        let testStore;

        beforeEach(() => {
            testStore = createDefaultStore(createMemoryHistory());
        });

        it('should render', () => {
            const result = mount(<Provider store={testStore}>
                <ConnectedContent />
            </Provider>);

            expect(result).toHaveLength(1);
            expect(result).toIncludeText('No posts to display.');
        });
        it('should render the bright component as default', () => {
            testStore.dispatch(ADD_FEED({
                id: 1,
                name: 'TestFeed',
                posts: [
                    {
                        id: 1,
                        title: 'Test Post',
                        description: 'Test content',
                        publishDate: new Date(),
                        author: 'Test Reporter',
                        categories: [
                            'test', 'sample',
                        ],
                        link: 'https://example.com',
                    },
                ],
                url: 'https://example.com',
                website: 'https://example.com',
                lastBuildDate: new Date(),
            }));

            const result = mount(<Provider store={testStore}>
                <ConnectedContent />
            </Provider>);

            expect(result.find(ConnectedContent)).toHaveStyleRule('border-right-color', '#212121');
        });
    });
});
