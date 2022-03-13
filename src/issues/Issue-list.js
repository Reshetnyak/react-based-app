import React from 'react';
import {NavLink, useLocation, useHistory} from 'react-router-dom';
import styles from './Issue-list.module.css';
import {Table} from '../components/Table';
import {StatusType} from "../status";
import {routes, routeParams} from "../App.routing";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const IssueList = ({issues}) => {
    const history = useHistory();
    const query = useQuery();

    const headers = [{
        text: 'Id',
    },{
        text: 'Status',
    },{
        text: 'Title',
    }];

    const currentFilter = query.get(routeParams.filter);
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
            to={location => `${location.pathname}?${routeParams.filter}=${filter}`}
            className={`${styles.filterButton} ${styles[filter] || 'all'}`}
            activeClassName={styles.active}
            key={i}
            isActive={() => query.get(routeParams.filter) === filter}
        >
            {filter}
        </NavLink>);

    const goToIssue = id => history.push(`/${routes.issues}/${id}`);

    return (
        <main className="issue-list">
            <h3 className={styles.title}>Issues</h3>
            <div className={`${styles.filters} ${styles.displayFlex}`}>
                <span >Show:</span>
                <ul className={styles.displayFlex}>
                    {filterLinks.map((link, i) => <li key={i}>{link}</li>)}
                </ul>
            </div>
            <Table
                headers={headers}
                rows={rows}
                rowClickHandler={goToIssue}
            />
        </main>
    );
};
