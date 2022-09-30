import React from 'react'
import { Add } from '../components'

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