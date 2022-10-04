import { React } from 'react'
import Photographers from '../components/Photographers';

// Search Page: This is not a component since it is only used once.
// props
//    - list - photographersList state from App
function Search(props) {

    return (
        <div>
            <Photographers list={props.list} />
        </div>
    )
}

export default Search;