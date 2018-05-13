import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleUsername(event) {
    this.setState({ username: event.target.value })
  }
  handlePassword(event) {
    this.setState({ password: event.target.value })
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <form>
          <input onChange={this.handleUsername} type="email" placeholder="email"/>
          <input onChange={this.handlePassword} type="password" placeholder="password"/>
        </form>
      </div>
    )
  }
}

export default Login;
