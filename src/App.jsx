import { useState } from 'react'
import './App.css'
import { MdWorkOutline } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { MdCastle } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { SideBar } from './SideBar';
import { ButtonMenu } from './ButtonMenu';
import { AllProjects } from './AllProjects';
import { Home } from './Home';


function App() {
  const [activeButtons, setActiveButtons] = useState("Home");
  
  const handleClick = (text) => {
    setActiveButtons(text)
  }
  const textMenu =[
    {text: `Home`, textHover: `Home`, icon: <LiaHomeSolid/>, iconHover:<MdCastle/>},
    {text: `Projects`, textHover: `Projects`, icon: <MdWorkOutline/>, iconHover:<MdWorkHistory/>},
  ]
  return (
    <div className='flex justify-center '>
    <SideBar>
      <div className="lg:mt-24 flex lg:flex-col items-center w-auto gap-4 px-3">
        <img src={"/ProfilePicture.jpg"} alt="Profile Picture" className='w-16 h-16 lg:w-24 lg:h-24 xl:w-40 xl:h-40 rounded-full object-cover' />
        
        <div className='flex flex-col items-center gap-2'>
          <p className='sm:text-lg lg:text-xl xl:text-4xl text-center'>Oscar Gonzalez</p>
          <p className='text-xs lg:text-md xl:text-lg'>Web Developer</p>
        </div>
      </div>
      <div className="flex w-full sm:w-1/2 lg:w-full justify-evenly lg:flex-col gap-5 lg:gap-8 lg:items-start px-8">
        {textMenu.map((menuButton, index) => (
          <ButtonMenu
          key={index}
          buttonText={menuButton.text}
          buttonTextHover={menuButton.textHover}
          icon={menuButton.icon}
          iconHover={menuButton.iconHover}
          handleClick={handleClick}
          />
        ))}
      </div>
    </SideBar>
    {(activeButtons === 'Projects') && (<AllProjects/>)}
    {(activeButtons === 'Home') && (<Home/>)}
    
    </div>
  )
}

export default App
