import React from 'react'
import '../styleling/banner.css'
function Complete({list=[]}) {
  return (
    <div>
        <h1  className='com'>Completed</h1>
         <div> 
         {list.map((c,index)=>(<div><label key={index}>{c}</label></div>))}
          </div>  
    </div>
  )
}

export default Complete