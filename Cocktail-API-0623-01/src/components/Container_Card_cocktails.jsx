import {SimpleGrid, Button, useColorModeValue, Box} from '@chakra-ui/react'
import { useState } from 'react';
import Card_cocktail from './Card_cocktail.jsx'

function Container_cards_cocktails() {
    const [data,setData] = useState();
    

    return (
      <>
      <Box>
        <Button variant='solid' colorScheme='green' onClick={() => setData(Math.random())}>Random!</Button>
          <SimpleGrid minChildWidth='280px' spacing='60px'
          justifyContent={"center"} alignContent={"center"} paddingX='10px'>
              <Card_cocktail data={data}/>
              <Card_cocktail data={data}/>
              <Card_cocktail data={data}/>
              <Card_cocktail data={data}/>
          </SimpleGrid>
      </Box>
      </>
    )
  }

export default Container_cards_cocktails;