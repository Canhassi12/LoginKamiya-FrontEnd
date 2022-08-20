import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Kamiya3 from "./Kamiya3";

export default function Profile(user) {

    const navigate = useNavigate();

    const [menuIsOpened, setMenuIsOpended] = useState(false);

    const [hamburguerIsOpened, setHamburguerIsOpened] = useState(false);

    function handleClickMenu() {
        setMenuIsOpended(!menuIsOpened);
    }
    
    async function handleClickLogout() {
        try {
            await api.post('/auth/logout', {},
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            });

            sessionStorage.clear();

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    function handleClickHamburguer() {
        setHamburguerIsOpened(!hamburguerIsOpened);
    }

    return(
        <>
            <div className="absolute hidden lg:flex">
                <div className="bg-gray-200 flex items-center gap-4 w-80 p-2 rounded-t">
                    <figure>
                        <Kamiya3 />
                    </figure>
            
                    <div className="flex flex-col">
                        <div className="text-2xl font-[Firacode]">
                            {user.name} 
                        </div>

                        <button onClick={handleClickMenu} className="max-w-fit">
                            <svg id="menu" className="w-4 cursor-pointer hover:opacity-60 text-blue-800" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
                        </button>
                    </div>                
                </div>


                <div className={`${!menuIsOpened && 'hidden'} absolute`}>
                    <div className="mt-[85px] ml-32  xl:ml-0  absolute flex flex-col items-center">
                       <p className="cursor-pointer bg-gray-300 w-40 xl:w-80 flex justify-center rounded-sm">
                            Profile
                        </p> 

                        <hr />
                        <button onClick={handleClickLogout} className="cursor-pointer bg-gray-300 w-40 xl:w-80 flex justify-center rounded-sm">
                            Logout
                        </button> 
                    </div>
                    
                </div>
            </div>
            <div className={`${!hamburguerIsOpened && 'hidden'} absolute lg:hidden` }>
                <div className="flex flex-col gap-[2px] text-white z-50 mt-10 md:mt-14 bg-zinc-800 w-20 md:w-32">
                    <button className="cursor-pointer border-zinc-400 border-[1px]">
                        Profile
                    </button>

                    <button onClick={handleClickLogout} className="cursor-pointer border-zinc-400 border-[1px]">
                        Logout                    
                    </button>
                </div>
            
            </div> 
            <svg onClick={handleClickHamburguer} className="w-10 sm:w-11 md:w-14 absolute lg:hidden opacity-70" fill="#fff" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm12.5 10.75c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.248c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.252c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75z"/></svg>
           

            
            
        </>
    );
}