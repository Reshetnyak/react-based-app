import './Issue-list.css';

export const IssueList = ({issues}) => (
    <ul className="issue-list">
        {issues.map(issue => <li><span className={`status-indicator ${issue.status.toLowerCase()}`}></span>{issue.title}</li>)}
    </ul>
);
