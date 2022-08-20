import { useEffect } from "react";
import {Design, Site, Profile} from "../../components";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";

export default function() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    useEffect (() => {
        if(!sessionStorage.getItem('expire_in') ||
        (JSON.parse(sessionStorage.getItem('expire_in')) || 0)
        < Date.now()
        ) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('expire_in');

            navigate('/');
        }
    });
    
    getUser();
    async function getUser() {
        try {
            const response = await api.get('user', 
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            });

            setName(response.data.name);
            setEmail(response.data.email);

        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <>
            <div className="flex flex-row-reverse mr-1 mt-2">
               <Profile name={name} email={email}/>

                <div className="flex justify-center w-full -z-30">
                    <div className="flex items-center">    
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-[Poppins]">Congratulations</h1>  
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-16">
                <div className="text-white h-[600px] sm:h-[800px] w-[350px] sm:w-[600px]  bg-zinc-800 flex justify-start pl-6 pt-3 flex-col gap-5">
                    Expectation: 
                    <Design />
                    Reality: 
                    <Site /> 
                </div>
            </div>
        </>
    );
}