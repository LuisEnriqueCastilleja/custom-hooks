import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            //Pasar los valores del formulario tal cual estaban
            ...formState,
            //Solo modificar el nombre
            [name]: value,
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        //Extraer los valores de mi formuario, desestructuremos formState
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
