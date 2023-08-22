import React from "react";
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody, useColorModeValue,
    ModalCloseButton, useDisclosure, Button, Text, Flex, Box, Image, Heading, UnorderedList} from '@chakra-ui/react'

function ModalCocktail(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Button
        rounded={'xl'}
        bg={useColorModeValue('green.500', 'blue.200')}
        color={useColorModeValue('white', 'blue.900')}
        _hover={{bg:useColorModeValue('green.600', 'blue.300')}}
        _focus={{bg:useColorModeValue('green.600', 'blue.300')}}
        onClick={onOpen} variant='ghost'>Make it at home!</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW="800px" paddingY={4}
            paddingX={{ base: 1, md: 6}}
            marginX={{ base: 4, md: 0}}
            >
            <ModalHeader>{props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody paddingX={10} marginBottom={10}>
            <Flex gap="20px" alignItems="space-between" direction={{ base: "column", md: "row" }}>
                <Box>
                    <Heading size='md'>Ingredients:</Heading>
                    <UnorderedList>
                        {props.strIngredients}
                    </UnorderedList>
                    <Heading size='md' marginTop={6}>Steps:</Heading>
                    <Text>{props.strInstructions}</Text>
                </Box>
                <Box maxW="240px">
                    <Image w='100%' borderRadius={10} src={props.strDrinkThumb}/>
                    <Text fontSize='xs' m={0}>{props.strAlcoholic}</Text> 
                    <Text fontSize='sm'>{props.strCategory}</Text> 
                </Box>
            </Flex>
            </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )  
}

export default ModalCocktail;