import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';

function Home() {
  return(
    <div>Home</div>
  )
};

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
};

export default App;
