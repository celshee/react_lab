import React from 'react'
import Banner from './components/banner' 
import Todo from './components/todo'
import Complete from './components/completed'
import './styleling/banner.css'
function App() {
  return (
    <div class='container'>
        <div>
        <Banner/>
        </div>
     
      <div className='component'>
      <Todo/>
    
      </div>
        

    </div>
  )
}

export default App