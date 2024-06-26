import { Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import useForm from "../hooks/useForm"

const MagicLinkForm = () => {

    const { formValues, handleInputChange} = useForm({email: ''})
    const { email } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues) // Esto no es necesario para que funcione el codigo es solo para ver los valores que se ingresan en los inputs del form como objeto
    }

    return(
        <>
            <Heading fontSize={'2xl'} mb={'20px'}>Login using Magic Link</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="magicemail">
                        <FormLabel >E-mail</FormLabel>
                        <Input type="email" name="email" value={email} onChange={handleInputChange}/>
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Send link</Button>
                </Stack>
            </form>
        </>
    )
}

export default MagicLinkForm 