import React from "react";
import {Image, Box, Flex, Heading, Text, Fade} from '@chakra-ui/react'


function Header_Cocktail(){
    return (
        <>
        <Flex>
            <Box bg='#000000' maxWidth={600}>
            <Image src="./src/assets/photo-1514362545857-3bc16c4c7d1b.jpg"/>
            </Box>
            <Box bg='#000000' flex={1} justifyContent={'right'} alignItems={"right"} p={20}>
            <Fade>
                <Heading size='4xl' color={'BlackAlpha 50'} maxW={600}>Cocktail recipe finder</Heading>
                <Text color='whiteAlpha.200' maxW={400}>Made with React in Vite and Chakra UI, consuming the TheCocktailDB API</Text>
            </Fade>
            </Box>
        </Flex>
        </>
    )
}

export default Header_Cocktail;