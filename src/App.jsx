import { useState } from 'react'
import './App.css'
import { MdWorkOutline } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
export function SideBar({children}) {
  return (
    <div className="fixed top-0 left-0 h-32 sm:h-24 lg:h-full w-full lg:w-1/6 lg:max-w-56 overflow-hidden sm:px-4 lg:px-4 bg-zinc-950 flex sm:flex-row lg:flex-col items-center justify-around lg:justify-start gap-4 lg:gap-20">
    {children}
    </div>
  )
}
function ButtonMenu(props){
  const [isHovered, setIsHovored] = useState(false);
  const handleMouseOver = () => {
    setIsHovored(true);
  }
  const handleMouseOut = () => {
    setIsHovored(false);
  }
  return(
    <>
    <button 
      className='hover:underline underline-offset-1 flex items-center'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
    {isHovered ? (props.buttonTextHover): (props.buttonText)}
    </button>
    </>
  )
}
export function CardsProjects({title, buttonTexts}){
  return(
    <div className='flex flex-col justify-start bg-zinc-800 rounded-lg'>
      <div className='bg-RecipesAndDrinks bg-cover bg-center bg-no-repeat w-full h-56 xl:h-72 rounded-lg'></div>
      <div className='m-5'>
        <div className='flex gap-12'>
          {
            buttonTexts.map((buttonText, indexButton) => (
              <button className='p-2 rounded-lg bg-zinc-900 hover:bg-zinc-950' key={indexButton}>{buttonText}</button>
            ))
          }
        </div>
        <h2 className='flex mt-6 text-lg lg:text-xl items-center'>{title}<span className='ml-2'><HiOutlineExternalLink/></span></h2>
      </div>
    </div>
  )
}
function AllProjects(){
  const projects = [
    {title:"Recipes and Drinks", buttonTexts: ["React", "Tailwind", "JavaScript"]},
    {title:"Title Project", buttonTexts: ["React"]},
    {title:"Title Project", buttonTexts: ["React", "Tailwind", "JavaScript"]},
    {title:"Title Project", buttonTexts: ["React", "Tailwind", "JavaScript"]},
    {title:"Title Project", buttonTexts: ["React", "Tailwind", "JavaScript"]},
    {title:"Title Project", buttonTexts: ["React", "Tailwind", "JavaScript"]},
    ]
  return (
    <section className='pt-32 sm:pt-24 lg:pt-0 lg:ml-44 xl:ml-56'>
      <h1 className='text-center my-6 text-xl lg:text-start lg:text-3xl lg:ml-4'>All Projects</h1>
      <div className='grid grid-cols-1 gap-4 px-1 max-w-md mx-auto sm:max-w-none sm:grid-cols-2 sm:px-2'>
        {
          projects.map((project, index) => (
            <CardsProjects
              key={index}
              title={project.title}
              buttonTexts={project.buttonTexts}
            />
          ))
        }
      </div>
      
    </section>
  )
}
function App() {
  const textMenu =[
    {text: `Projects`, textHover: `Projects`, icon: MdWorkOutline, iconHover: MdWorkHistory},
    {text: `About`, textHover: `:) About`},
    {text: `Contacts`, textHover: `:) Contacts`}
  ]
  return (
    <>
    <SideBar>
      <div className="lg:mt-8 flex lg:flex-col items-center w-auto gap-4">
        <div className='profilePicture w-16 h-16 rounded-full object-contain'>
        </div>
        <div className='flex flex-col items-center'>
          <p>Oscar Gonzalez</p>
          <p>Web Developer</p>
        </div>
      </div>
      <div className="flex lg:flex-col gap-5 lg:gap-8 w-auto lg:items-start">
        {textMenu.map((element, index) => (
          <ButtonMenu
          key={index}
          buttonText={element.text}
          buttonTextHover={element.textHover}
          icon={element.icon}
          />
        ))}
      </div>
    </SideBar>
    <AllProjects/>
    </>
  )
}

export default App
