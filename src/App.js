import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import LoanBuilder from './Containers/LoanBuilder/LoanBuilder';
import { Route, Switch } from 'react-router-dom';
import Error from './Components/Error/Error';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <Switch>
          <Route path="/statement" exact render={() => (<Error>Oops, page not found</Error>)}/>
            <Route path="/" exact component={LoanBuilder}/>
            
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
