import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
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
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={(e) => console.log(e.target)}
        />
        <CardList monsters={this.state.monsters} />
        {/* we're going to move this section inside the card-list component, since it's the component's responsibility to generate the list elements...
          So, to do that, we have to pass the 'monsters' as props in the CardList element, so they can be accessed by the component */}
        {/* {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))} */}
      </div>
    );
  }
}

export default App;
