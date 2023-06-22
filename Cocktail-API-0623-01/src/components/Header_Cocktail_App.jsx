import React from "react";
import {Image, Box, Flex, Heading, Text,useColorModeValue} from '@chakra-ui/react'

function Header_Cocktail(){
    return (
        <>
        <Flex bg={useColorModeValue('orange.100', 'orange.700')}>
            <Box maxWidth={600}>
            <Image src=
            {useColorModeValue("./src/assets/photo-1514362545857-3bc16c4c7d1b.jpg", "./src/assets/kitera-dent-6n_kXdPJa3s-unsplash.jpg")}
            />
            </Box>
            <Box flex={1} justifyContent={'right'} alignItems={"right"} p={20}>
                <Heading size='4xl' maxW={600}>Cocktail recipe finder</Heading>
                <Text maxW={400}>Made with React in Vite and Chakra UI, consuming the TheCocktailDB API</Text>
            </Box>
        </Flex>
        </>
    )
}

export default Header_Cocktail;