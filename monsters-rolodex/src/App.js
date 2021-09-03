import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>Hello, my name is Elena! You?</p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// instead of making App a function, we turn it into a component
class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'hello Elena!',
    };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hello, my name is Elena! You?</p>
          <p>{this.state.string}</p>

          {/* using the setState() method from the Component class */}
          <button onClick={() => this.setState({ string: 'Hello Marika!!' })}>
            Change text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
