import { useState } from 'react'
import './App.css'
import { ChakraProvider, Image, Box, Flex, Heading} from '@chakra-ui/react'
import Container_cards_cocktails from './Container_Card_cocktails.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <Flex>
          <Box bg='#000000' maxWidth={600} justifyContent={"center"} alignContent={"center"}>
            <Image src="./src/assets/photo-1514362545857-3bc16c4c7d1b.jpg"/>
          </Box>
          <Box bg='#000000' justifyContent={'right'} alignItems={'center'}>
            <Heading size='lg' color='#ffffff'>Cocktail recipe finder</Heading>
          </Box>
        </Flex>
        <Container_cards_cocktails/>
      </ChakraProvider>
    </>
  )
}

export default App
