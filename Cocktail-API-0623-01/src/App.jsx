import { useState } from 'react'
import './App.css'
import { ChakraProvider, Image, Box} from '@chakra-ui/react'
import Container_cocktails_cards from './Container_Card_cocktails.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <Box maxH='300px' overflow='hidden' bgColor='rgba(0,0,0,1)'
        backgroundImage="url('https://images.unsplash.com/photo-1596463989140-3b600dab72e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')">
        </Box>
        <Container_cocktails_cards/>
      </ChakraProvider>
    </>
  )
}

export default App
