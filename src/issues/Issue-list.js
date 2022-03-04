import './Issue-list.css';

export const IssueList = ({issues}) => (
    <ul className="issue-list">
        {issues.map(issue => <li><span className={issue.status}></span>{issue.title}</li>)}
    </ul>
);
