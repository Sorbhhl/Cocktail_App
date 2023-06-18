import {SimpleGrid, Button, Container} from '@chakra-ui/react'
import { useState } from 'react';
import Card_cocktail from './Card_cocktail.jsx'

function Container_cocktails_cards() {
    const [data,setData] = useState();
    

    return (
      <>
        <Button variant='solid' colorScheme='green' onClick={() => setData(Math.random())}>Random!</Button>
        <SimpleGrid minChildWidth='360px' spacing='60px' justifyContent={"center"} alignContent={"center"} bg='#e4f4e9' paddingX='4em'>
            <Card_cocktail data={data}/>
            <Card_cocktail data={data}/>
            <Card_cocktail data={data}/>
        </SimpleGrid>
      </>
    )
  }

export default Container_cocktails_cards;