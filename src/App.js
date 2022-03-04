import logo from './logo.svg';
import './App.css';
import {Footer} from './layout/Footer';
import {Issue} from './issues/Issue';
import {IssueList} from './issues/Issue-list';
import {StatusType, StatusTypeTextMap} from './status';

function App() {
    const issues = [{
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
    }];

    const issue = {
        status: StatusType.Open,
        statusText: StatusTypeTextMap[StatusType.Open],
        title: 'To think about ellipsis',
        description: `In the aside, we'll face with a situation of truncated issue titles. We need to think about
        user friendly way of displaying long titles`
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Or not
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IssueList issues={issues}/>
          <Issue issue={issue}/>
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
