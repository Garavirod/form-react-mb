import {useState} from 'react';

export const useForm = (initialState = {}) =>{
    const [values, setValues] = useState(initialState);
    const reset = ()=>{
        setValues(initialState);
    }
    const handleInputChange =({target})=>{       
        setValues({
            ...values,
            [target.name]: target.value
        });
    };


    const handleFechachange = (date) =>{
        setValues({
            ...values,
            "fecha": date
        });
    }

    const handleHorachange = (date) =>{
        setValues({
            ...values,
            "hora": date
        });
    }


    const handleJornadachange = (date) =>{
        setValues({
            ...values,
            "jornada": date
        });
    }
    return [
        values, 
        handleInputChange, 
        handleFechachange,
        handleHorachange,
        handleJornadachange,
        reset];
};