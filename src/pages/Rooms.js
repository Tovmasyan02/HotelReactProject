import React from 'react'
import GeneralLayer from '../Components/GeneralLayer';
import Banner from '../Components/Banner/Banner';
import {Link} from 'react-router-dom';
const Rooms = () => {
    return (
        <div>
            <GeneralLayer layer_classname="roomsHero">
                <Banner tittle="Our Rooms">
                   <Link to='/' className="btn-primary">Back to HOME</Link>
                </Banner> 
            </GeneralLayer>
        </div>
    )
}

export default Rooms
