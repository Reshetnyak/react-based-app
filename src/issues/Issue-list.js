import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Issue-list.module.css';
import {Table} from '../components/Table';
import {useLocation} from 'react-router-dom';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const IssueList = ({issues}) => {
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
        const row = {
            id,
            fields: [id, title, status]
        };
        if (filter === 'all' || filter === status) {
            return acc.concat(row);
        } else {
            return acc;
        }
    }, []);

    console.log('rows', rows);

    const rowClickHandler = e => console.log(e);

    return (
        <div className="issue-list">
            <h3>Issues</h3>
            <pre>{}</pre>
            <div className="action-bar">
                <span className="action-bar__title">Show:</span>
                <Link to={'/issues?filter=all'} className={styles.filterButton}>All</Link>
                <Link to={'/issues?filter=Open'} className={styles.filterButton}>Open</Link>
                <Link to={'/issues?filter=Pending'} className={styles.filterButton}>Pending</Link>
                <Link to={'/issues?filter=Closed'} className={styles.filterButton}>Closed</Link>
            </div>
            <Table
                headers={headers}
                rows={rows}
                rowClickHandler={rowClickHandler}
            />
        </div>
    );
};
