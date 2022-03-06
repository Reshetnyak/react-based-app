import { useParams, useHistory } from 'react-router-dom';
import {IssueService} from "./Issue.service";
import {IndicatorSize, StatusIndicator} from "../status/Status-indicator";
import styles from './Issue.module.css';

export const Issue = () => {
    const history = useHistory();
    let { id } = useParams();
    const issue = IssueService.getIssue(parseInt(id, 10));
    console.log('issue is', issue);

    return (
    <article className="issue">
        <button
            className={styles.backButton}
            onClick={() => history.goBack()}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" className={styles.arrow}>
                <path fill="#FF4A75"
                      d="M15.28 15.78a.75.75 0 11-1.06-1.06L15.94 13H5.75a.75.75 0 110-1.5h10.19l-1.72-1.72a.75.75 0 111.06-1.06l3.001 3a.748.748 0 010 1.06l-3 3z"></path>
            </svg>
            <span>{'Back to issues'}</span>
        </button>
        <header>
            <h4 className={styles.title}>
                <StatusIndicator status={issue.status} size={IndicatorSize.Medium}/>
                {id} {issue.title}
            </h4>
        </header>
        <main>
            <p className="issue__description">{issue.description}</p>
        </main>
    </article>
)};
