import { projects } from "./projects"
import { CardsProjects } from "./CardsProjects"
export function Home(){
    return (
      <section className='pt-32 sm:pt-24 lg:pt-0 w-full lg:w-5/6'>
        <h1 className='shadow-lg shadow-cyan-500/50 text-center py-4 text-xl lg:text-5xl font-semibold'>Webflow Development</h1>
        <div className='mx-auto place-items-center px-4 my-12 lg:my-16 grid grid-cols-2 gap-4 max-w-2xl lg:max-w-7xl md:grid-cols-4 md:max-w-4xl'>
          <div className='bg-zinc-950 shadow-lg shadow-cyan-500/50 rounded-lg w-full h-full p-3 sm:p-9 flex items-center text-2xl text-center font-semibold'>Responsive Design</div>
          <div className='bg-zinc-950 shadow-lg shadow-cyan-500/50 rounded-lg w-full h-full p-3 sm:p-9 flex flex-col items-center justify-center'>
            <span className='text-5xl font-semibold'>10+</span>
            <span className='text-xs lg:text-sm'>Completed Projects</span>
          </div>
          <div className='rounded-lg md:w-full h-full col-span-2 row-span-2 shadow-lg shadow-cyan-500/50'>
            <CardsProjects
                key={projects[0].index}
                title={projects[0].title}
                buttonTexts={projects[0].buttonTexts}
                img={projects[0].img}
                url={projects[0].url}
            />
          </div>
          <div className='bg-zinc-950 shadow-lg shadow-cyan-500/50 rounded-lg w-full h-full p-3 sm:p-9 flex flex-col items-center justify-center'>
            <span className='text-5xl font-semibold'>5<span className='text-xs lg:text-sm font-light'> years</span></span>
            <span className='text-xs lg:text-lg text-center font-semibold'>Customer Service Experience</span>
          </div>
          <div className='bg-zinc-950 shadow-lg shadow-cyan-500/50 rounded-lg w-full h-full p-3 sm:p-9 flex justify-center items-center text-center text-2xl font-semibold'>React & Tailwind</div>
          <div className='bg-zinc-950 shadow-lg shadow-cyan-500/50 rounded-lg w-full h-full p-3 sm:p-9 col-span-2 flex justify-center items-center text-xl font-semibold'>I am fluent in both Spanish and English</div>
          <div className='bg-zinc-950 shadow-lg shadow-cyan-500/50 rounded-lg w-full h-full p-3 sm:p-9 col-span-2 flex justify-center items-center text-xl font-semibold'>Bachelor's degree</div>
        </div>
        
      </section>
    )
  }