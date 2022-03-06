import logo from './logo.svg';
import './App.css';
import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Issue} from './issues/Issue';
import {IssueList} from './issues/Issue-list';
import {StatusType, StatusTypeTextMap} from './status';
import {IssueService} from "./issues/Issue.service";
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

    // console.log(issues[0]);
    // IssueService.setStatus(0);
    // console.log(issues[0]);

    const issue = {
        status: StatusType.Open,
        statusText: StatusTypeTextMap[StatusType.Open],
        title: 'To think about ellipsis',
        description: `In the aside, we'll face with a situation of truncated issue titles. We need to think about
        user friendly way of displaying long titles`
    };

  return (
      <Router>
          <Header/>
          <main className="main">
              <Switch>
                  <Route exact path="/">
                      <Redirect to={'/issues?filter=all'} />
                  </Route>
                  <Route exact path="/issues">
                      <IssueList issues={issues} />
                  </Route>
                  <Route path="/issues/:id">
                       {/*<Wow />*/}
                      <Issue/>
                      {/* </Route> */}
                  </Route>
              </Switch>
          </main>
          <Footer/>
      </Router>
  );
}

function Wow() {
    const {id} = useParams();
    return <h1>Issue {id}</h1>
}

export default App;
