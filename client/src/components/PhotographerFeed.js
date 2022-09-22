import React from 'react'
import PhotographerCard from './PhotographerCard'

function PhotographerFeed(props) {
    

    return (
        <div class="feed">
            <h2>Photographers</h2>
            <PhotographerCard name={'Spencer'} location={'Rexburg'}/>
            <PhotographerCard name={'Hana'} location={'Rexburg'}/>
        </div>
    )
}

export default PhotographerFeed;