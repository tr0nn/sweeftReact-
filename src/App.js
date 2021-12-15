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
        {/*<Link to="/posts/4"> links </Link> */}
        

        <Switch>
          <Route path="/" exact component={MainPosts} />
          <Route path="/posts/:id"  component={Datvi} />

          {/* tu ver ipova rac arunda chaiweros amismartebs / gverdze */}
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}