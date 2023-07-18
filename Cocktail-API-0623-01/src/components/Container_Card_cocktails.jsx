import {React, useState, useEffect} from 'react';
import {SimpleGrid, Button, useColorModeValue, Box, Input, Text, Flex, Divider, AbsoluteCenter} from '@chakra-ui/react'
import {Search2Icon} from '@chakra-ui/icons'
import Card_cocktail from './Card_cocktail.jsx'


function Container_cards_cocktails() {
  //Default cocktails
  const [cocktail, setCocktail] = useState([])
  useEffect(() => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((response) => response.json())
  .then((data) => {console.log(data);setCardCocktailData(data)})
  }, [])

  //Random cocktails
  const getRandomCocktail = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    setCardCocktailData(data)    
  };

    //Set a minimun of 4 cocktails in default and random cocktails
    const setCardCocktailData = async (data) => {
      if (data.drinks && data.drinks.length < 4) {
        const additionalResponse1 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const additionalData1 = await additionalResponse1.json();
  
        const additionalResponse2 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const additionalData2 = await additionalResponse2.json();
  
        const additionalResponse3 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const additionalData3 = await additionalResponse3.json();
  
        const newData = {
          ...data,
          drinks: [...data.drinks, ...additionalData1.drinks, ...additionalData2.drinks, ...additionalData3.drinks].slice(0, 4),
        };
  
        console.log(newData);
        setCocktail(newData);
      } else {
        console.log(data);
        setCocktail(data);
      }
    }

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
    setCocktail(data)
  };

  let numberCocktails = cocktail.drinks?.length;

  return (
    <>
      <Box bg={useColorModeValue('orange.50', 'blue.800')}>
        <Flex direction={{ base: "column", md: "row" }} alignItems={"center"} justifyContent={"center"} gap='30' p={4}>
          <Box textAlign={"center"}>
            <Text>Look for specific cocktails:</Text>
            <form onSubmit={handleFormSubmit}>
              <Flex>
                <Input type="text" placeholder="Search for cocktails..." value={searchTerm} onChange={handleInputChange}/>
                <Button type="submit"><Search2Icon></Search2Icon></Button>
              </Flex>
            </form>
          </Box>
          <Box textAlign={"center"}>
            <Text>Look for random cocktails:</Text>
            <Button variant='solid' colorScheme='green' onClick={getRandomCocktail}>Random!</Button>
          </Box>
        </Flex>
        <Divider orientation='horizontal'></Divider>
        <Box textAlign={"center"} p={4}>
          <Text>Listed drinks: {numberCocktails}</Text>
        </Box>
        <SimpleGrid minChildWidth='280px' spacing='30px' minHeight={500}
        justifyContent={"center"} alignContent={"center"} paddingX='60px'>
          {cocktail.drinks?.map((cocktail, index) => (
            <Card_cocktail key={index} cocktail={cocktail} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Container_cards_cocktails;