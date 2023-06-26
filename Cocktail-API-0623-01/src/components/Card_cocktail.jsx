import React from "react";
import { useState, useEffect } from 'react';
import { Card,CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Image, Text, ListItem, useColorModeValue} from '@chakra-ui/react'
import ModalCocktail from "./Modal-window";


function Card_cocktail(props){
    const [cocktail, setCocktail] = useState([])
    useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((cocktail) => {console.log(cocktail);setCocktail(cocktail.drinks[0])})
    }, [props.data])

    const cocktailIng = [];
    let i = 1;
    while (cocktail[`strIngredient${i}`] != null) {
        cocktailIng.push(<ListItem key={cocktail.idDrink}>
            {cocktail[`strMeasure${i}`]} - {cocktail[`strIngredient${i}`]}
        </ListItem>);
        i++;
    }

    return (
        <div>
            <Card maxW={280} borderRadius={20} key={cocktail.idDrink} margin="auto" boxShadow={'xl'}
            bg={useColorModeValue('orange.100', 'blue.900')}>
            <CardBody>
                <Image w="100%" borderRadius={10} src={cocktail.strDrinkThumb}/>
                <Stack mt='md' spacing='3'>
                    <Heading size='md' marginTop={2}>{cocktail.strDrink}</Heading>
                    <Text fontSize="xs" m={0}>{cocktail.strAlcoholic}</Text> 
                    <Text fontSize="sm">{cocktail.strCategory}</Text>               
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent='right' alignItems='right'>
                <ButtonGroup>
                <ModalCocktail 
                    title={cocktail.strDrink}
                    strDrinkThumb={cocktail.strDrinkThumb}
                    strAlcoholic={cocktail.strAlcoholic}
                    strCategory={cocktail.strCategory}
                    strIngredients = {cocktailIng}
                    strInstructions = {cocktail.strInstructions}
                />
                </ButtonGroup>
            </CardFooter>
            </Card>
      </div>
    )
}

export default Card_cocktail;