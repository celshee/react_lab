import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from './assets/components/Home'
function App() {
  

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/CreateDeck' element={<CreateDeck/>}/>
        <Route path='/deck/:DeckId' element={<ViewDeck/>}/>
        <Route path='/Play/:DeckId' element={<Play/>}/> */}
      </Routes>
    </>
  )
}

export default App
