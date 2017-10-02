import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.less';
import RaterContainer from './RaterContainer';


class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={RaterContainer}/>
      </div>
    </BrowserRouter>

    );
  }
}

export default App;
