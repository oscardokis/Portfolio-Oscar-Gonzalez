import { useState } from 'react'
import './App.css'
import { MdWorkOutline } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { RiContactsBook2Line } from "react-icons/ri";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BsLaptop } from "react-icons/bs";
import { BsLaptopFill } from "react-icons/bs";

export function SideBar({children}) {
  return (
    <div className="fixed top-0 left-0 h-32 flex-wrap sm:h-24 lg:h-full w-full lg:w-1/6 lg:max-w-56 overflow-hidden sm:px-4 lg:px-4 bg-zinc-950 flex sm:flex-row lg:flex-col items-center justify-around lg:justify-start lg:gap-20">
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
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}>
    {isHovered ? 
    (
      <div className='flex items-center'>
        <span className='mr-1'>
        {props.iconHover}
        </span>
        {props.buttonTextHover}
      </div>
    ):(
      <div className='flex items-center'>
      <span className='mr-1'>
      {props.icon}
      </span>
      {props.buttonText}
      </div>
    )}
    </button>
    </>
  )
}
export function CardsProjects({title, buttonTexts, img, url}){
  const [toggleLink, useToggleLink] = useState(false);
  return(
    <div className='flex flex-col justify-start bg-zinc-800 rounded-lg'>
      <a target='_blank' href={url}>
        <img src={`./src/assets/${img}`} alt={title} className='object-cover object-center w-full h-52 xl:h-72 rounded-lg xs:h-64'/>
      </a>
      <div className='m-5'>
        <div className='flex gap-4 sm:gap-8'>
          {
            buttonTexts.map((buttonText, indexButton) => (
              <button className='p-2 rounded-lg bg-zinc-900 hover:bg-zinc-950' key={indexButton}>{buttonText}</button>
            ))
          }
        </div>
        <a  
        target='_blank' 
        href={url} 
        onMouseEnter={() => {useToggleLink(true)}}
        onMouseLeave={() => {useToggleLink(false)}}
        className='flex mt-6 text-lg lg:text-xl items-center max-w-max hover:underline hover:decoration-1'>
          <h2 >{title}</h2>
          <span className='ml-2'>
            {toggleLink ? (<HiOutlineExternalLink/>):(<LiaExternalLinkSquareAltSolid />)}
          </span>
        </a>
      </div>
    </div>
  )
}
function AllProjects(){
  const projects = [
    {title:"Recipes and Drinks", buttonTexts: ["React", "Tailwind", "JavaScript", "Vite"], img:"RecipesAndDrinks.jpg", url:"https://oscardokis.github.io/Recipes-Drinks-with-React/"},
    {title:"To-Do List", buttonTexts: ["React", "HTML", "JavaScript", "Babel"], img:"ListTodos.jpg", url:"https://oscardokis.github.io/todo-List-with-React/"},
    {title:"Tic Tac Toe", buttonTexts: ["React", "CSS", "HTML", "JavaScript"], img:"TicTacToe.jpg", url:"https://oscardokis.github.io/tic-tac-toe-React-Vite/"},
    {title:"VideoGame Blind Spot", buttonTexts: ["HTML", "CSS", "JavaScript"], img:"VideoGameJavaScript.jpg", url:"https://oscardokis.github.io/practical-workshop-JavaScript-VideoGames/"},
    {title:"Password Generator", buttonTexts: ["HTML", "CSS", "JavaScript"], img:"PasswordGenerator.jpg", url:"https://oscardokis.github.io/Password-Generator/"},
    {title:"Yard Sale", buttonTexts: ["HTML", "CSS", "JavaScript"], img:"YardSale.jpg", url:"https://oscardokis.github.io/"},
    ]
  return (
    <section className='pt-32 sm:pt-24 lg:pt-0 lg:ml-44 xl:ml-56'>
      <h1 className='text-center my-6 text-xl lg:text-start lg:text-3xl lg:ml-4'>All Projects</h1>
      <div className='grid grid-cols-1 gap-4 px-1 max-w-md mx-auto sm:max-w-5xl sm:grid-cols-2 sm:px-2'>
        {
          projects.map((project, index) => (
            <CardsProjects
              key={index}
              title={project.title}
              buttonTexts={project.buttonTexts}
              img={project.img}
              url={project.url}
            />
          ))
        }
      </div>
      
    </section>
  )
}
function App() {
  const textMenu =[
    {text: `Projects`, textHover: `Projects`, icon: <MdWorkOutline/>, iconHover:<MdWorkHistory/>},
    {text: `About`, textHover: `About`, icon: <BsLaptop/>, iconHover:<BsLaptopFill/>},
    {text: `Contacts`, textHover: `Contacts`, icon: <RiContactsBook2Line/>, iconHover:<RiContactsBook2Fill/>}
  ]
  return (
    <>
    <SideBar>
      <div className="lg:mt-8 flex lg:flex-col items-center w-auto gap-4 px-3">
        <img src="./src/assets/profilePicture.jpg" alt="Profile Picture" className='w-16 h-16 rounded-full object-cover' />
        
        <div className='flex flex-col items-center gap-2'>
          <p className=' sm:text-lg text-center'>Oscar Gonzalez</p>
          <p className='text-xs'>Web Developer</p>
        </div>
      </div>
      <div className="flex lg:flex-col gap-5 lg:gap-8 w-auto lg:items-start px-3">
        {textMenu.map((menuButton, index) => (
          <ButtonMenu
          key={index}
          buttonText={menuButton.text}
          buttonTextHover={menuButton.textHover}
          icon={menuButton.icon}
          iconHover={menuButton.iconHover}
          />
        ))}
      </div>
    </SideBar>
    <AllProjects/>
    </>
  )
}

export default App
