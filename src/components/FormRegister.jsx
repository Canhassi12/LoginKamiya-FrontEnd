import { useState } from "react";
import api from "../services/api";
import { Navigate, useNavigate } from "react-router-dom";

export default function FormRegister() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState('');

  async function handleClick() {
    try {
      await api.post("register", {
        name,
        email,
        password
      });

      navigate('/');

    } catch (error) {
      setError(error.response.data);
    }   
  }
  
  return (
    <div className="flex flex-col w-72 mt-28 login justify-center rounded-tr-md rounded-br-md text-white p-3">
      
      <h2 className="flex uppercase font-bold justify-center text-3xl">
        Register
      </h2>

      
      <input type="text" value={name} onChange={event => setName(event.target.value)}
      className="border-2 mt-6 border-white text-black rounded" placeholder="Name"
      />

      <input
        value={email}
        onChange={event => setEmail(event.target.value)}
        className="border-2 mt-6 border-white text-black rounded"
        type="text"
        placeholder="Email"
      />

      <input
        value={password} onChange={event => setPassword(event.target.value)}
        className="border-2 mt-6 border-white text-black rounded"
        type="password"
        placeholder="Password"
      />

      {error && 
        <p className="text-red-500 absolute mt-40 font-bold">{error}</p>
      }

      <button
        onClick={handleClick}
        className="bg-gray-300 text-black font-semibold rounded hover:bg-gray-500 hover:text-white mt-7"
      >
        Register
      </button>
    </div>
  );
}