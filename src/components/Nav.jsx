import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {


  const[show,setShow]=useState(false)


  useEffect(()=>{   //useEffect is used because any action that changes dom is A  side effect here this function changes a property.
    window.addEventListener("scroll",()=>{    //window represents an open window in browser.   window.addEventListener ("property",function to change)
      if(window.scrollY>600){
        setShow(true)
      }
      else{
        setShow(false)
      }

    })
  })
  
  return (
    <>
    <div className={`img ${show &&` nav-black `}`}> 
       <img style={{width:'150px'}} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png " alt="" />
       </div>
    </>
  )
}

export default Nav