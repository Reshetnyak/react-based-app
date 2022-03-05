import './Issue.css';
import { useParams } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import {IssueService} from "./Issue.service";

export const Issue = () => {
    const history = useHistory();
    let { id } = useParams();
    const issue = IssueService.getIssue(parseInt(id, 10));
    console.log('issue is', issue);

    return (
    <article className="issue">
        <header>
            <button onClick={() => history.goBack()}>{'< Go Back!'}</button>
            <h1>Id is: {id}</h1>
            <span className={`status-indicator ${issue.status.toLowerCase()}`} title={issue.statusText}></span>
            <h4 className="issue__title">{issue.title}</h4>
        </header>
        <main>
            <p className="issue__description">{issue.description}</p>
        </main>
    </article>
)};
