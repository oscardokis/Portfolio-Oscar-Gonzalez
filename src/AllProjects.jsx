import { projects } from "./projects"
import { CardsProjects } from "./CardsProjects"
export function AllProjects(){
    return (
      <section className='pt-32 sm:pt-24 lg:pt-0 w-full lg:w-5/6'>
        <h1 className='shadow-lg shadow-cyan-500/50 text-center mb-4 py-5 text-xl lg:text-5xl font-semibold'>All Projects</h1>
        <div className='grid grid-cols-1 gap-8 px-1 my-12 lg:my-16 max-w-md mx-auto sm:max-w-5xl lg:max-w-7xl sm:grid-cols-2 sm:px-2'>
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