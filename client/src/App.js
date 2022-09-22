import React from 'react';
import SearchPhotographer from './components/SearchPhotographer'
import './styles/App.css';


function App(props) {

  return (
    <div className="App">
      <SearchPhotographer list={props.list}/>
    </div>
  );
}


export default App;
