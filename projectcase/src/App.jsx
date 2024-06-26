// Aqui renderizamos el componente de auth para mostrar los demas componentes renderizados en auth

import { Container } from "@chakra-ui/react"
import Auth from "./components/Auth"

function App() {

  return (
    <>
      <h1>Esto es App.jsx</h1>
      <Container maxW='100%' h='100vh'>
        <Auth/>
      </Container>
    </>
  )
}

export default App
