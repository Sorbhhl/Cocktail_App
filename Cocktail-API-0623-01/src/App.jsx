import {React} from "react";
import {ChakraProvider, ColorModeScript, CSSReset, extendTheme} from '@chakra-ui/react';
import Container_cards_cocktails from './components/Container_Card_cocktails'
import Header_Cocktail from './components/Header_Cocktail_App'
import Nav from './components/Navbar_cocktail'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function App() {  
  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <Nav></Nav>
        <Header_Cocktail/>
        <Container_cards_cocktails/>
      </ChakraProvider>
    </>
  )
}

export default App
