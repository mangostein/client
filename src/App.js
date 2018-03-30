import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function Home() {
  return(
    <div>Home</div>
  )
};

function Login() {
  return(
    <div>Login</div>
  )
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
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
