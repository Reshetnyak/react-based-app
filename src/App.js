import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./App.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Issue } from "./issues/Issue";
import { IssueList } from "./issues/Issue-list";
import { issues as defaultIssues } from "./issues/issues.mock";
import { getNextStatus } from "./status";
import { routes, routeParams } from "./App.routing";

function App() {
  const [issues, setIssues] = useState(defaultIssues);
  const changeStatus = (id) => {
    setIssues((previousIssues) =>
      previousIssues.map((issue) => {
        if (issue.id === id) {
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
      <Header />
      <Switch>
        <Route exact path={routes.root}>
          <Redirect to={`/${routes.issues}?${routeParams.filter}=all`} />
        </Route>
        <Route exact path={`/${routes.issues}`}>
          <IssueList issues={issues} />
        </Route>
        <Route path={`/${routes.issues}/:id`}>
          <Issue onStatusChange={changeStatus} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
