import React from "react";
import {Box, Flex, Text, useColorModeValue, Link} from '@chakra-ui/react'
import { CheckIcon, StarIcon, InfoIcon} from '@chakra-ui/icons';

function Details_row(){
    return(
        <>
            <Flex py={8} px={20}
            bg={useColorModeValue('gray.100', 'blue.900')}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "space-between" }}
            >
                <Box textAlign="center" fontWeight={"light"} bg={useColorModeValue('whiteAlpha.800', 'blue.800')} borderRadius="2xl" p={5} margin={5}>
                    <CheckIcon/>
                    <Text fontSize={"xl"} p={2}>Recipe cocktail finder</Text>
                </Box>
                <Box textAlign="center" fontWeight={"light"} bg={useColorModeValue('whiteAlpha.800', 'blue.800')} borderRadius="2xl" p={5} margin={5}>
                    <StarIcon/>
                    <Text fontSize={"xl"} p={2}>Made with React, Vite and Chakra UI</Text>
                </Box>
                <Box textAlign="center" fontWeight={"light"} bg={useColorModeValue('whiteAlpha.800', 'blue.800')} borderRadius="2xl" p={5} margin={5}>
                    <InfoIcon/>
                    <Text fontSize={"xl"} p={2}>Consuming <Link href="https://www.thecocktaildb.com/api.php" isExternal>TheCocktailDB API</Link></Text>
                </Box>
            </Flex>
        </>

    )
}

    export default Details_row;