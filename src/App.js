import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeald: '',
    };
    // console.log("constructor(1)");
  }

  componentDidMount() {
    // console.log("componentDidMount(3)");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            // console.log(this.state, this.state.monsters);
            return { monsters: users };
          }
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  // [{name: 'Leanne'},{name: 'Yihua'}]

  onSearchChange = event => {
    // console.log(event.target.value);
    const searchFeald = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchFeald };
    });
  };

  render() {
    console.log('render from Appjs');
    const { monsters, searchFeald } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFeald);
    });

    // console.log("render(2)");
    return (
      <div className="App">
        {/* <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        /> */}
        <h1 className="app-title">Monsters searcher</h1>
        <SearchBox
          placeholder="Search monsters..."
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
        />
        {/* {filterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
