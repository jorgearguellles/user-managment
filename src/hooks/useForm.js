import { useState } from "react";

const useForm = (initial) => {
  
  const [formData, setFormData] = useState(initial);

  const handleChange = (event) =>{
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };

  const reset = () => {
    setFormData(initial);
  }

  return [formData, handleChange, reset];
}

export {useForm};