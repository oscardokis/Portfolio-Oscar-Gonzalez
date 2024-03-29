import { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

export function CardsProjects({title, buttonTexts, img, url}){
    const [toggleLink, setToggleLink] = useState(false);
    return(
      <div className='flex flex-col justify-start bg-zinc-800 rounded-lg shadow-lg shadow-cyan-500/50 transform transition duration-500 hover:scale-105'>
        <a target='_blank' href={url} rel='noreferrer noopener'>
          <img src={img} alt={title} className='object-cover object-center w-full h-52 xl:h-96 rounded-lg xs:h-64'/>
        </a>
        <div className='m-5'>
          <div className='flex gap-x-2 sm:gap-x-8 flex-wrap'>
            {
              buttonTexts.map((buttonText, indexButton) => (
                <button className='p-2 rounded-lg bg-zinc-900 hover:bg-zinc-950' key={indexButton}>{buttonText}</button>
              ))
            }
          </div>
          <a  
          target='_blank' 
          href={url} 
          rel='noreferrer noopener'
          onMouseEnter={() => setToggleLink(true)}
          onMouseLeave={() => setToggleLink(false)}
          className='flex mt-3 sm:mt-6 text-lg lg:text-xl items-center max-w-max hover:underline hover:decoration-1'>
            <h2 >{title}</h2>
            <span className='ml-2'>
              {toggleLink ? (<HiOutlineExternalLink/>):(<LiaExternalLinkSquareAltSolid />)}
            </span>
          </a>
        </div>
      </div>
    )
  }