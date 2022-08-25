import { useState } from "react";
import api from "../../services/api";
import { Navigate, useNavigate } from "react-router-dom";
import useForm from "./useForm";

export default function FormRegister() {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const [form, handleForm] = useForm();

  async function handleClick() {
    let name = form.email;
    let email = form.email;
    let password = form.password;
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

      
      <input type="text" name="name" onChange={handleForm}
      className="border-2 mt-6 border-white text-black rounded" placeholder="Name"
      />

      <input
        name="email" onChange={handleForm}
        className="border-2 mt-6 border-white text-black rounded"
        type="text"
        placeholder="Email"
      />

      <input
        name="password" onChange={handleForm}
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