import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Issue-list.module.css';
import {Table} from '../components/Table';
import {useLocation, useHistory} from 'react-router-dom';
import {StatusType} from "../status";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const IssueList = ({issues}) => {
    const FILTER_PARAM = 'filter';
    const history = useHistory();
    const query = useQuery();

    const headers = [{
        text: 'Id',
    },{
        text: 'Status',
    },{
        text: 'Title',
    }];

    const currentFilter = query.get(FILTER_PARAM);
    // map issues to table rows
    const rows = issues.reduce((acc, {id, title, status}) => {
        if (currentFilter === 'all' || currentFilter === status) {
            return acc.concat({
                id,
                fields: [id, status, title]
            });
        } else {
            return acc;
        }
    }, []);

    const filters = [
        'all',
        StatusType.Open,
        StatusType.Pending,
        StatusType.Closed
    ];

    const filterLinks = filters.map((filter, i) =>
        <NavLink
            title={`Show ${filter.toLowerCase()} issues`}
            to={location => `${location.pathname}?${FILTER_PARAM}=${filter}`}
            className={`${styles.filterButton} ${styles[filter] || 'all'}`}
            activeClassName={styles.active}
            key={i}
            isActive={() => query.get(FILTER_PARAM) === filter}
        >
            {filter}
        </NavLink>);

    const goToIssue = id => history.push(`/issues/${id}`);

    return (
        <div className="issue-list">
            <h3>Issues</h3>
            <pre>{}</pre>
            <div className={styles.filters}>
                <span >Show:</span>
                <ul className={styles.filters}>{filterLinks.map((link, i) => <li key={i}>{link}</li>)}</ul>
            </div>
            <Table
                headers={headers}
                rows={rows}
                rowClickHandler={goToIssue}
            />
        </div>
    );
};
