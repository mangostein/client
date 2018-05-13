import React from 'react';


class Login extends React.Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <form>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
        </form>
      </div>
    )
  }
}

export default Login;
