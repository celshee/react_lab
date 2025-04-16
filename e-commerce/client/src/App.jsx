
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Explore from './components/Explore'
import Checkout from './components/Checkout'
function App() {
  

  return (
    
    <Routes>
      
      <Route path='/'element={<Home/>}/>
      <Route path='/explore' element={<Explore/>}/>
        <Route path="/checkout" element={<Checkout />} />
      <Route/>
    </Routes>
  
  )
}

export default App
