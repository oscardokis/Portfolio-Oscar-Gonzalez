export function SideBar({children}) {
    return (
      <div className="fixed lg:sticky top-0 left-0 h-32 flex-wrap sm:h-24 lg:h-screen w-full lg:w-1/6 overflow-hidden sm:px-4 lg:px-4 bg-zinc-950 flex flex-row lg:flex-col items-center justify-around lg:justify-start lg:gap-20">
      {children}
      </div>
    )
  }