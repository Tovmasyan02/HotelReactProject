import React from 'react'
import GeneralLayer from '../Components/GeneralLayer';
import Banner from '../Components/Banner/Banner';
import {Link} from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <GeneralLayer>
                <Banner tittle="404" subtittle="Page not found">
                   <Link to='/' className='btn-primary'>Back to HOME</Link>
                </Banner>
            </GeneralLayer>
        </div>
    )
}

export default Error
