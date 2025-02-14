import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DataList from './DonorList'
import EditDonor from './EditDonor';
import DonorCreate from './DonorCreate';
 
const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Blood Donor Management</h1>
        <Switch>
          <Route exact path="/" component={DataList} />
          <Route path="/create" component={DonorCreate} />
          <Route path="/edit/:donorId" component={EditDonor} />
        </Switch>
      </div>
    </Router>
  );
};
 
export default App;