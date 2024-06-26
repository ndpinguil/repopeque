import { useState } from "react"

const useForm = (initialState) => {
    const [formValues, setFormValues] = useState(initialState)

    const handleInputChange = (e) => {
        const { value, name } = e.target
        // console.log({value, name}); // Esto no es necesario para que funcione el codigo es solo para ver los valores que se ingresan en los inputs del form

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    return{
        formValues,
        handleInputChange
    }
}

export default useForm