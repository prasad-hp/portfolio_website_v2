function NavBar() {
    
  return (
    <div>
                <nav className="hidden lg:block fixed" id="navBar-1">
            <div className="flex justify-between items-center w-screen py-1 px-3">
                <div className="w-1/2">
                    <img src="./images/Prasad.jpeg" className="rounded-full w-20"/>
                </div>
                <div className="w-5/12">
                    <ol className="grid grid-cols-5 grid-flow-col gap-5 text-2xl w-full text-Light-White text-center">
                        <li className="col-span-1"><a href="#home">Home</a></li>   
                        <li className="col-span-1"><a href="#about">About</a></li>
                        <li className="col-span-1"><a href="#work">Work</a></li>
                        <li className="col-span-1"><a href="#contact">Contact</a></li>
                        <li className="col-span-1"><button>Resume</button></li>
                    </ol>
                </div>
            </div>
        </nav>
        <nav className="max-w-xl lg:hidden md:block">
            <div className="flex justify-between items-center align-middle px-8 py-4 w-screen">
                    <img src="./images/Prasad.jpeg" className="rounded-full w-16"/>
                    <button className="m-0 p-0" ><img id="menuIcon" src="./images/menu_white_24dp.svg" className="m-0 p-0 h-14"/></button>
            </div>
        </nav>  
    </div>
  )
}

export default NavBar