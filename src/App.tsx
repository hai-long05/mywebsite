import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import './index.css'
import Home from './components/Home'

function App() {

	// test

  return (
    <>
      <div className='bg-[#1f242d] w-screen h-[100%]'>
        <Nav />
        <Home />
      </div>
    </>
  )
}

export default App
