import React from 'react';
import './App.css';
import './DetailInfo.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Datvi from './components/DetailInfo';
import MainPosts from './components/mainPosts';

export default class App extends React.Component {
  render(){
    return (
      <div>
        <Switch>
          <Route path="/" exact component={MainPosts} />
          <Route path="/posts/:id"  component={Datvi} />
          {/* თუ ვერ იპოვა ამ / main მისამართზე გადავა */}
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}