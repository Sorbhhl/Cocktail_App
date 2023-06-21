import { useState } from 'react'
import './App.css'
import { ChakraProvider} from '@chakra-ui/react'
import Container_cards_cocktails from './Container_Card_cocktails.jsx'
import Header_Cocktail from './Header_Cocktail_App'
import theme from './theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider theme={theme}>
        <Header_Cocktail/>
        <Container_cards_cocktails/>
      </ChakraProvider>
    </>
  )
}

export default App
