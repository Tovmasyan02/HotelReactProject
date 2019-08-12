import React from 'react';
import './Banner.css';

const Banner = ({children,tittle,subtittle}) => {
    return (
        <div className="banner">
            <h1>{tittle}</h1>
            <h1>{subtittle}</h1>
            {children}
        </div>
    )
}

export default Banner