import {getNextStatus, StatusType, StatusTypeTextMap} from '../status';

export const issue = {
    status: StatusType.Open,
    statusText: StatusTypeTextMap[StatusType.Open],
    title: 'To think about ellipsis',

};

export const issues = [{
    id: 'E221',
    title: 'To think about ellipsis',
    status: StatusType.Open,
    description: `In the aside, we'll face with a situation of truncated issue titles. We need to think about
        user friendly way of displaying long titles.`
},{
    id: 'F1',
    title: 'To think about filtering',
    status: StatusType.Pending,
    description: `I assume that the half time of a user is spent on list view. That's why we need to help a user to find
    needed issue easily.`
},{
    id: 'T01',
    title: 'Cry without TypeScript',
    status: StatusType.Closed,
    description: `For more than 5 years I've been enjoying (and suffering some times) TypeScript. It helped me to think 
    more about data structures and edge cases. It's also a documentation in place.`
},{
    id: 'R101',
    title: 'First React Component',
    status: StatusType.Closed,
    description: `Write my first React component. It should be not so hard, thanks to my Custom Elements experience`
},{
    id: 'L000',
    title: 'To find fine description generator',
    status: StatusType.Open,
    description: `Unfortunately, next issues will be generated with a simple lorem ipsum emmet command.`
},{
    id: 'L001',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    status: StatusType.Open,
    description: `Adipisci atque debitis distinctio doloribus eligendi ipsum iusto laboriosam libero maiores, mollitia 
    nesciunt nihil odio officia officiis placeat quasi sit tempora? Ab aliquid architecto asperiores blanditiis debitis,
     esse excepturi explicabo facere facilis iste libero modi
    molestiae mollitia officiis omnis possimus provident recusandae tempora tempore temporibus ullam vero voluptas
    voluptatum! Soluta, temporibus!`
},{
    id: 'L002',
    title: 'Consequatur dicta doloribus ducimus error eveniet',
    status: StatusType.Pending,
    description: `laudantium magnam mollitia odio provident quasi quisquam
    quos, rem saepe sequi ut voluptates? Blanditiis corporis ea ipsam labore laboriosam necessitatibus odio quisquam
    similique. Ab aliquid architecto asperiores blanditiis debitis, esse excepturi explicabo facere facilis iste libero modi
    molestiae mollitia officiis omnis possimus provident recusandae tempora tempore temporibus ullam vero voluptas
    voluptatum! Soluta, temporibus!`
},{
    id: 'L003',
    title: 'A aperiam cum dolorem, earum incidunt, ipsam',
    status: StatusType.Open,
    description: `Iusto laudantium molestiae nostrum obcaecati quae quaerat quis quos
    sunt tempore tenetur voluptas? Consequuntur fugiat hic iure magni necessitatibus nihil odit, sint voluptatibus!
    Ab aliquid architecto asperiores blanditiis debitis, esse excepturi explicabo facere facilis iste libero modi
    molestiae mollitia officiis omnis possimus provident recusandae tempora tempore temporibus ullam vero voluptas
    voluptatum! Soluta, temporibus!`
}];

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

