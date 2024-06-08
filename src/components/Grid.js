import React from 'react';
import '../App.css';

const Grid = ({flagImg,country,alt}) => {
    return(
        <>
        <div className='container'>
            <div className='grid-item'>
            <img src={flagImg} alt={alt} className='flag_img'/>
            <p className='country'>{country}</p>
            </div>
            
            

        </div>
        </>
    )
}
export default Grid;