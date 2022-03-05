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
    const history = useHistory();
    // const handleClick = () => history.push('/goodbye');
    const query = useQuery();
    const headers = [{
        text: 'Id',
    },{
        text: 'Status',
    },{
        text: 'Title',
    }];

    const filter = query.get('filter');

    const rows = issues.reduce((acc, {id, title, status}) => {
        if (filter === 'all' || filter === status) {
            return acc.concat({
                id,
                fields: [id, title, status]
            });
        } else {
            return acc;
        }
    }, []);

    const rowClickHandler = id => history.push(`/issues/${id}`);
    const filters = [
        'all',
        StatusType.Open,
        StatusType.Pending,
        StatusType.Closed
    ];
    const filterLinks = filters.map((filter, i) =>
        <NavLink
            to={location => `${location.pathname}?filter=${filter}`}
            className={styles.filterButton}
            activeClassName={styles.active}
            key={i}
            isActive={() => query.get('filter') === filter}
        >
            {filter}
        </NavLink>);

    return (
        <div className="issue-list">
            <h3>Issues</h3>
            <pre>{}</pre>
            <div className="action-bar">
                <span className="action-bar__title">Show:</span>
                {[...filterLinks]}

                {/*<NavLink to={location => '/issues?filter=all'} className={styles.filterButton} activeClassName="active">All</NavLink>*/}
                {/*<NavLink to={'/issues?filter=Open'} className={styles.filterButton} activeClassName="active">Open</NavLink>*/}
                {/*<NavLink to={'/issues?filter=Pending'} className={styles.filterButton} activeClassName="active">Pending</NavLink>*/}
                {/*<NavLink to={'/issues?filter=Closed'} className={styles.filterButton} activeClassName="active">Closed</NavLink>*/}
            </div>
            <Table
                headers={headers}
                rows={rows}
                rowClickHandler={rowClickHandler}
            />
        </div>
    );
};
