import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

import { Issue } from './Issue';

jest.mock('./Issue.service', () => {
    const originalModule = jest.requireActual('./Issue.service');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        IssueService: {
            getIssue(id) {
                return {
                    id: 'E221',
                    title: 'To think about ellipsis',
                    status: 'Open',
                    description: `In the aside, we'll face with a situation of truncated issue titles. We need to think about
        user friendly way of displaying long titles.`
                }
            }
        }
    };
});

test('Renders Issue component', () => {

    const history = createMemoryHistory();
    history.push('/issues/E221');
    render(
        <Router history={history}>
            <Issue onStatusChange={() => {}}/>
        </Router>,
    );

    const backToIssuesSpan = screen.getByText(/Back to issues/i);

    expect(backToIssuesSpan).toBeInTheDocument();
});
