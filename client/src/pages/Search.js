import React from 'react'
import Photographers from '../components/Photographers';

function Search(props) {
    return (
        <div>
            <Photographers list={props.list} />
            
        </div>
    )
}

export default Search;