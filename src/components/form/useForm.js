import { useState } from "react";

export default function useForm() {
    const [form, setForm] = useState({});
    function handleForm({target: {value, name}}) {
        setForm({
          ...form,
           [name]: value,
        })
    }

    return[form, handleForm]
}