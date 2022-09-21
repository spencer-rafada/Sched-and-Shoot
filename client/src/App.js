import React from 'react';
// import {useState} from 'react';
import './styles/App.css';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';


// TODO: Put routes here
function App() {
  // TODO: Functionality here
  // const [state, setState] = useState({
  //   result = []
  // });

  // const onSearch = async(text) => {
  //   const result = await // get API
  // }

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          Snap & Shoot! 
        </h2>
        <h3 className="subtitle is-3 has-text-centered">
          Book your next photographer!
        </h3>
        <SearchBar />
        <CardList />
      </div>
    </div>
  );
}

export default App;
