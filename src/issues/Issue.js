import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {IssueService} from "./Issue.service";
import {IndicatorSize, StatusIndicator} from "../status/Status-indicator";
import styles from './Issue.module.css';
import {getNextStatus} from "../status";

export const Issue = ({onStatusChange}) => {
    const history = useHistory();
    const { id } = useParams();
    const issue = IssueService.getIssue(id);
    const nextStatus = getNextStatus(issue.status)?.status;

    return (
        <main>
            <article className="issue">
                <button
                    data-test-id="back-to-issues"
                    className={styles.backButton}
                    onClick={() => history.goBack()}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" className={styles.arrow}>
                        <path fill="#FF4A75"
                              d="M15.28 15.78a.75.75 0 11-1.06-1.06L15.94 13H5.75a.75.75 0 110-1.5h10.19l-1.72-1.72a.75.75 0 111.06-1.06l3.001 3a.748.748 0 010 1.06l-3 3z"></path>
                    </svg>
                    <span>{'Back to issues'}</span>
                </button>
                <header className={styles.header}>
                    <h4 className={styles.title}>
                        <StatusIndicator status={issue.status} size={IndicatorSize.Medium}/>
                        {id} {issue.title}
                    </h4>
                    {nextStatus && <button
                        className={`${styles.changeStatusButton} ${styles[nextStatus]}`}
                        onClick={() => onStatusChange(id)}
                    >Move to {nextStatus}</button>}
                </header>
                <p className="issue__description">{issue.description}</p>
            </article>
        </main>
)};

Issue.propTypes = {
    onStatusChange: PropTypes.func.isRequired,
};

