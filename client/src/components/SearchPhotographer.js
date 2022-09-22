import React, { useState } from 'react'
import SearchBar from './SearchBar'
import PhotographerFeed from './PhotographerFeed';

function SearchPhotographer(props) {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <SearchBar inputText={inputText} setInputText={setInputText}/>
      <PhotographerFeed inputText={inputText} list={props.list}/>
    </div>
  )
}

export default SearchPhotographer;