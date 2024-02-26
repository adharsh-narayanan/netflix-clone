import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from '../instance'



function Row({title,fetchUrl,isPoster}) {
  const[movies,setMovies]=useState([])  //to store data fetched // movies returns an arraay of objects
 //console.log(title,fetchUrl);
 //console.log(isPoster);
 const base_url = "https://image.tmdb.org/t/p/original/";


 const fetchData=async()=>{   //fetching affects pure function - side effects
  const response = await instance.get(fetchUrl)
  //console.log(response.data.results);
  setMovies(response.data.results)
 }
//console.log(movies);
 useEffect(()=>{fetchData()},[])  //useEffect is used to handle side effects || syntax = useEffect (function,dependency)



  return (
    <div className='row'>
      <h3>{title}</h3>
  
    <div className='movie-row'>  
      {
        movies.map((item)=>(<img className={`movie ${isPoster?`movie_poster`:`movie`}`} src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt='poster'/>))
      } {/* map is used because its an array of objects */}
      </div>
  
    </div>

  )
}

export default Row