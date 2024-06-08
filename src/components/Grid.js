import React from 'react';
import '../App.css';

const Grid = ({flagImg,country,alt}) => {
    return(
        <>
        <div>
            <div className='grid-item'>
            <img src={flagImg} alt={alt} />
            <p className='country'>{country}</p>
            </div>
            
            

        </div>
        </>
    )
}
export default Grid;