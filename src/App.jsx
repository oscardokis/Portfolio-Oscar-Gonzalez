import { useState } from 'react'
import './App.css'
export function SideBar({children}) {
  return (
    <div className="fixed z-1 h-32 lg:h-full w-full lg:w-3/12 lg:max-w-56 overflow-x-hidden lg:px-4 lg:pt-24 bg-black flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-4 lg:gap-40">
    {children}
    </div>
  )
}
function App() {

  return (
    <>
    <SideBar>
      <div className="flex lg:flex-col items-center w-auto gap-4">
        <div className='profilePicture w-16 h-16 rounded-full object-contain'>
        </div>
        <div className='flex flex-col items-center'>
          <p>Oscar Gonzalez</p>
          <p>WebApp Developer</p>
        </div>
      </div>
      <div className="flex lg:flex-col gap-8 w-auto lg:items-center">
        <a href="#projects">Projects</a>
        <a href="about">About</a>
        <a href="contact">Contacts</a>
      </div>
    </SideBar>

    </>
  )
}

export default App
