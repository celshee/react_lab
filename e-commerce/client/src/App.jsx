
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home'
import Explore from './assets/components/Explore'
import About from './assets/components/About'
function App() {
  

  return (
    
    <Routes>
      
      <Route path='/'element={<Home/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/about' element={<About/>}/>
      <Route/>
    </Routes>
  
  )
}

export default App
