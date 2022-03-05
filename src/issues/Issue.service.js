import {getNextStatus, StatusType} from '../status';

export const IssueService = {
    issues: [{
        id: 0,
        title: 'To think about ellipsis',
        status: StatusType.Open,
    },{
        id: 1,
        title: 'To think about filtering',
        status: StatusType.Pending,
    },{
        id: 2,
        title: 'Cry without TypeScript',
        status: StatusType.Closed,
    }],
    getIssues() {
        return this.issues;
    },
    getIssue(id) {
        console.log(this, this.issues.find(issue => issue.id === id));
        return this.issues.find(issue => issue.id === id);
    },
    setStatus(id) {
        const issue = this.getIssue(id);
        const nextStatus = getNextStatus(issue.status).status;
        issue.status = nextStatus;
    }
};

