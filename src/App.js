import React from 'react';

//stateless component
function Header(props) {
  return <h1>{props.string}</h1>
};

//class component
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header string="client"/>
      </div>
    );
  }
}

export default App;
