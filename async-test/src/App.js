import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberNo: 49,
    };
  }
  handleClick = () => {
    // this.setState({ numberNo: this.state.numberNo + 1 }, () =>
    //   console.log(this.state.numberNo)
    // );
    this.setState(
      (prevState, prevProps) => {
        return { numberNo: prevState.numberNo + 1 };
      },
      () => {
        console.log(this.state.numberNo);
      }
    );
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>{this.state.numberNo}</p>
          <button onClick={this.handleClick}>Update State</button>
        </header>
      </div>
    );
  }
}

export default App;
