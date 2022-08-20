import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Kamiya3 from "./Kamiya3";

export default function Profile(user) {

    const navigate = useNavigate();

    const [isOpened, setIsOpended] = useState(false);

    function handleClickMenu() {
        setIsOpended(!isOpened);
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

    return(
        <div className="absolute">
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

            <div className={`${!isOpened && 'hidden'}` } >
                <p className=" bg-gray-300  ">
                    Profile
                </p> 

                <hr />
                <p onClick={handleClickLogout} className="bg-gray-300 rounded-b cursor-pointer">
                    Logout
                </p>
            </div> 
        </div>
    );
}