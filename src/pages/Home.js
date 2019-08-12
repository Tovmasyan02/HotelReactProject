import React from 'react'
import '../App.css'
import GeneralLayer from '../Components/GeneralLayer';
import Banner from '../Components/Banner/Banner';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div className="Home"> 
            <GeneralLayer>
               <Banner tittle="Delux rooms" subtittle="Delux rooms starting at $299">
                 <Link to="/rooms" className="btn-primary">Our Rooms</Link>
               </Banner>
            </GeneralLayer>
        </div>
    )
}

export default Home
