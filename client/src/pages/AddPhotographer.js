import React from 'react'
import { Add } from '../components'

// AddPhotographer: This is not a component since it is only used once.
// props 
//    - function onAdd - handle the submit form
//    - list - photographersList state
function AddPhotographer(props) {
  return (
    <div>
      <Add 
        list={props.list}
        onAdd={props.onAdd}/>
    </div>
  )
}

export default AddPhotographer;