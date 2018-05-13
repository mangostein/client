import React from 'react';

const rule = {
  container: {
    display: 'flex',
    height: '70vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    display: 'block',
    marginTop: '30px'
  },
  header: {
    letterSpacing: '5px'
  }
}

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
      <div style={rule.container}>
        <div style={rule.form}>
          <h3 style={rule.header}>Login</h3>
          <form>
            <input style={rule.input} onChange={this.handleUsername} type="email" placeholder="email"/>
            <input style={rule.input} onChange={this.handlePassword} type="password" placeholder="password"/>
          </form>
          <input style={rule.input} type="button" value="submit"/>
        </div>
      </div>
    )
  }
}

export default Login;
