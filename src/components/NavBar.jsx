export default function NavBar() {
    
   return (
    <div>
        <header className="flex bg-[#555961] items-center justify-between w-full h-16">
            <nav className="flex gap-4 justify-start ml-8">
                <h1 className="uppercase text-3xl flex">React App</h1>
                <img src="src\assets\react.svg"/>
            </nav>

            <nav>
                <ul className="flex gap-8 mr-16 cursor-pointer text-xl">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Canhassi</li>
                </ul>
            </nav>
        </header>
    </div>
   ); 
}