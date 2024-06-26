// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouters } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouters>
      <App/>
    </BrowserRouters>
  </ChakraProvider>
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
)
