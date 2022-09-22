import React, { useEffect } from 'react'

function SearchBar(props) {

  const handleInput = (e) => {
    props.setInputText(e.target.value);
  }

  useEffect(()=>{})

  return (
    <form onSubmit={()=>alert(props.inputText)}>
      <input
        type="text"
        placeholder='Enter location...'
        onChange={handleInput}
      />
      <input
        type="submit"
        value="Submit" 
      />
    </form>
  )
}

export default SearchBar;