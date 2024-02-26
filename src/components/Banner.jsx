import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

function Banner({fetchUrl}) {

  const[movie,setMovie]=useState({})  //because movie returns an object

  const base_url = "https://image.tmdb.org/t/p/original/"; //base url of images

  //console.log(fetchUrl);

  const fetchData=async()=>{
    const response = await instance.get(fetchUrl)
    //console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])    //Math.random()*range   generates random numbers btwn 0-1 hence used Math.floor( ) to remove decimals and used that value as index
    setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
  }

  console.log(movie);



  useEffect(()=>{fetchData()
      
  },[])



  return (
   
      <div style={{height:'600px',backgroundImage:`url(${base_url}${movie.backdrop_path})`,backgroundAttachment:`fixed`}}>
       <div className='bannerDetails '>
          <h1>{movie.name}</h1>
          <button className='btn btn-danger'>Play</button>
          <button className='btn btn-outline-light ms-4'>More Info</button>
          <h4>{movie.overview?.slice(0,200)}...</h4>
       </div>
      </div>
    
  )
}

export default Banner