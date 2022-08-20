import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function FormLogin() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function handleClickLogin() {
    try {
      const response = await api.post("auth/login", {
        email,
        password
      });
      
      if(sessionStorage.getItem('token')) {
        sessionStorage.removeItem('token');
      }
      
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('expire_in', JSON.stringify(Date.now() + 3000000));

      navigate('/app');

    } catch (error) {
      setError(error.response.data);
    }
  }

  function handleClickRedirectToRegister() {
    navigate('/register');
  }
  
  return (
    <div className="flex flex-col w-56 mt-28 mr-2 md:w-72 md:mr-0 login justify-center rounded-tr-md rounded-br-md text-white p-3">
      <h2 className="flex uppercase font-bold justify-center text-2xl md:text-3xl">
        Login
      </h2>

      <label className="">Email</label>
      <input
        value={email}
        onChange={event => setEmail(event.target.value)}
        className="border-2 border-white text-black rounded"
        type="text"
        placeholder="Email"
        />
      <label className="">Password</label>
      <input
        value={password} onChange={event => setPassword(event.target.value)}
        className="border-2 mt-1 border-white text-black rounded"
        type="password"
        placeholder="Password"
        />

      {error && 
        <p className="text-red-500 absolute mt-24 font-bold">{error}</p>
      }
      
      <button
        onClick={handleClickLogin} 
        className="bg-gray-300 text-black md:p-[2px] md:mt-6 font-semibold rounded hover:bg-gray-500 hover:text-white mt-2"
        >
        Login
      </button>

      <button onClick={handleClickRedirectToRegister} className="mt-2 md:p-[2px] bg-gray-300 text-black font-semibold rounded hover:bg-gray-500 hover:text-white">
        Create new account
      </button>
    </div>
  );
}
