import logo from './logo.svg';
import './App.css';
import {Footer} from './layout/Footer';
import {Issue} from './issues/Issue';
import {IssueList} from './issues/Issue-list';
import {StatusType, StatusTypeTextMap} from './status';
import {IssueService} from "./issues/Issue.service";
import {Table} from './components/Table';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch,
} from 'react-router-dom';

function App() {
    const issues = IssueService.getIssues();

    console.log(issues[0]);
    IssueService.setStatus(0);
    console.log(issues[0]);

    const issue = {
        status: StatusType.Open,
        statusText: StatusTypeTextMap[StatusType.Open],
        title: 'To think about ellipsis',
        description: `In the aside, we'll face with a situation of truncated issue titles. We need to think about
        user friendly way of displaying long titles`
    };

    const rows = [
        {
            fields: [
                { text: 'hello', link: '/3' },
                { text: 'hello', link: '/3' },
                { text: 'hello', link: '/3' },
            ],
        },
        {
            fields: [
                { text: 'hello', link: '/3' },
                { text: 'hello', link: '/3' },
                { text: 'hello', link: '/3' },
            ],
        },
        {
            fields: [
                { text: 'hello', link: '/3' },
                { text: 'hello', link: '/3' },
                { text: 'hello', link: '/3' },
            ],
        },
        {
            fields: [
                { text: 'hello', link: '/3' },
                { text: 'hello', link: '/3' },
                { text: 'hello', link: '/3' },
            ],
        },
    ];

  return (
      <Router>
    <div className="App">
        <Link to={'/3'}>Go to 3</Link>
        <Link to={'/'}>Go back to Home</Link>

      <Footer/>

    </div>
          <Switch>
              <Route exact path="/">
                  <Table headers={['one', 'two', 'three']} rows={rows} />
              </Route>
              <Route path="/:id">
                  {/* <Wow /> */}
                   <Issue issue={issue}/>
                  {/* </Route> */}
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
