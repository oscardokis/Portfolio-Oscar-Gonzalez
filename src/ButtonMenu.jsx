import { useState } from "react";

export function ButtonMenu(props){
    const [isHovered, setIsHovored] = useState(false);
    const handleMouseOver = () => {
      setIsHovored(true);
    }
    const handleMouseOut = () => {
      setIsHovored(false);
    }
    const { buttonText, handleClick } = props;
    return(
      <>
      <button 
        className='hover:underline underline-offset-1 flex items-center lg:text-md xl:text-2xl'
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        onClick={() => {handleClick(buttonText)}}
      >
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
        {buttonText}
        </div>
      )}
      </button>
      </>
    )
  }