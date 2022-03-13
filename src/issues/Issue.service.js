import {getNextStatus, StatusType, StatusTypeTextMap} from '../status';
import {issues} from "./issues.mock";

export const issue = {
    status: StatusType.Open,
    statusText: StatusTypeTextMap[StatusType.Open],
    title: 'To think about ellipsis',
};

//instead of Redux of other State Management Library. Just an object with data
export const IssueService = {
    issues,
    getIssues() {
        return this.issues;
    },
    getIssue(id) {
        return this.issues.find(issue => issue.id === id);
    },
    setStatus(id) {
        const issue = this.getIssue(id);
        const nextStatus = getNextStatus(issue.status).status;
        issue.status = nextStatus;
    }
};

