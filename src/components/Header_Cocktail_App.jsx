import React from "react";
import {Image, Box, Flex, Heading, Text,useColorModeValue} from '@chakra-ui/react'
import myImageLight from '../assets/olena-sergienko-JjGLEN7T8xI-unsplash(opt).jpg';
import myImageDark from '../assets/mae-mu-YNMjGIPgD_c-unsplash(opt).jpg'

function Header_Cocktail(){
    return (
        <>
        <Flex bg={useColorModeValue('white', 'blue.800')}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={{ base: "center", md: "space-between" }}
        paddingTop={10}
        >
            <Box order={{ base: 2, md: 1 }}>
            <Image src=
            {useColorModeValue(myImageLight, myImageDark)}
            />
            </Box>
            <Box flex={1} justifyContent={'right'} alignItems={"right"} order={{ base: 1, md: 2 }}
            p={{ base: 10, md: 10, xl: 20 }}>
                <Heading size="3xl">Cocktail recipe finder</Heading>
                <Text mt={2}>Made with React, Vite and Chakra UI, consuming the TheCocktailDB API</Text>
            </Box>
        </Flex>
        </>
    )
}

export default Header_Cocktail;