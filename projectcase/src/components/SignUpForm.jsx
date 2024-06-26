import { Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
// import { useState } from "react"
import useForm from "../hooks/useForm"

const initialState = {
    fullName: '',
    email: '',
    password: ''
}

const SignUpForm = () => {
    
    const { formValues, handleInputChange} = useForm(initialState)
    const { fullName, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues) // Esto no es necesario para que funcione el codigo es solo para ver los valores que se ingresan en los inputs del form como objeto
    }

    return(
        <>
            <Heading fontSize={'2xl'} mb={'20px'}>Sign Up</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="fullName">
                        <FormLabel >Full name</FormLabel>
                        <Input type="text" name="fullName" value={fullName} onChange={handleInputChange}/>
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel >E-mail</FormLabel>
                        <Input type="email" name="email" value={email} onChange={handleInputChange}/>
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel >Password</FormLabel>
                        <Input type="password" name="password" value={password} onChange={handleInputChange}/>
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Register</Button>
                </Stack>
            </form>
        </>
    )
}

export default SignUpForm