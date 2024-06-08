import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import Grid from './Grid';

const Flags = () => {
        const[flags,setFlags]=useState([]);

        useEffect(()=>{
                async function fetchData(){
                        try{
                                const res= await axios.get("https://restcountries.com/v3.1/all");
                                console.log(res.data)
                                setFlags(res.data);

                        }catch(error){console.log(error)}
                }fetchData();

        },[]);

        return (<>
                <div className='grid-container'>
                        {
                                flags.map((item,index)=>{
                                        return <Grid flagImg={item.flags.png} key={index} alt={item.flags.alt} country={item.name.common}/>
                                })
                        }
            
                </div>
                
                </>)
            
   
}
export default Flags;