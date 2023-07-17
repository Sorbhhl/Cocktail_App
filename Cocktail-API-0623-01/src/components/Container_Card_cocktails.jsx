import {React, useState, useEffect} from 'react';
import {SimpleGrid, Button, useColorModeValue, Box, Tabs, TabList, Tab, TabPanels, TabPanel, Input} from '@chakra-ui/react'
import Card_cocktail from './Card_cocktail.jsx'


function Container_cards_cocktails() {
  //Default cocktails
  const [cocktail, setCocktail] = useState([])
  useEffect(() => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((response) => response.json())
  .then((data) => {console.log(data);setCocktail(data)})
  }, [])

  //Random cocktails
  const handleRandomize = () => {
    setCocktail(Math.random());
  };

  //Search for specific drinks
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchDrinks();
  };

  const searchDrinks = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    const data = await response.json();
    console.log(data);
    setCocktail(data.drinks[0])
  };

  return (
    <>
      <Box bg={useColorModeValue('orange.50', 'blue.800')}>
        <Button variant='solid' colorScheme='green' onClick={handleRandomize}>Random!</Button>
        <form onSubmit={handleFormSubmit}>
          <Input type="text" placeholder="Buscar bebidas" value={searchTerm} onChange={handleInputChange} marginRight="2"/>
          <Button type="submit">Buscar</Button>
        </form>
        <SimpleGrid minChildWidth='280px' spacing='60px'
        justifyContent={"center"} alignContent={"center"} paddingX='10px'>
          {cocktail?.map((drink) => (
            <Card_cocktail key={drink.idDrink} cocktail={drink} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Container_cards_cocktails;