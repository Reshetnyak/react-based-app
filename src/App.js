import './App.css';
import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Issue} from './issues/Issue';
import {IssueList} from './issues/Issue-list';
import {IssueService, issues as defaultIssues} from "./issues/Issue.service";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {getNextStatus} from "./status";
import {useState} from "react";
function App() {
    const [issues, setIssues] = useState(defaultIssues);//IssueService.getIssues());
    const changeStatus = id => {
        setIssues(previousIssues => previousIssues.map(
            issue => {
                if(issue.id === id){
                    const nextStatus = getNextStatus(issue.status)?.status;
                    if (nextStatus) {
                        issue.status = nextStatus;
                    }
                }
                return issue;
            })
        );
    };

    return (
        <Router>
            <Header/>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={'/issues?filter=all'} />
                    </Route>
                    <Route exact path="/issues">
                        <IssueList issues={issues} />
                    </Route>
                    <Route path="/issues/:id">
                        <Issue onStatusChange={changeStatus}/>
                    </Route>
                </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
