// import {Component} from 'react'

import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// Functional Components and Hooks
const App = () => {
  const [searchField, setSearchField] = useState('') //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // console.log(searchField)
  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users)
    );
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField (searchFieldString);

  };

  

  return (
    <div className="App">

      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='search monters' 
        className='monsters-search-box' 
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}


// Class Components
// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount () {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     },
//     () => {
//       // console.log(this.state);
//     }))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
    

//     this.setState(() => {
//       return {searchField};
//     })
//   }


//   render(){

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     // console.log(filteredMonsters)

//     return (
//       <div className="App">

//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           placeholder='search monters' 
//           className='monsters-search-box' 
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   };
  
// }

export default App;
