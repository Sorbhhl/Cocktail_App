import React from "react";
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,
    ModalCloseButton, useDisclosure, Button, Text, Flex, Box, Image, Heading, UnorderedList} from '@chakra-ui/react'

function ModalCocktail(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Button
        rounded={'full'}
        bg={'green.400'}
        color={'white'}
        _hover={{bg: 'green.500'}}
        _focus={{bg: 'green.500',}}
        onClick={onOpen} variant='ghost'>Make it at home!</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW="800px" paddingX={6} paddingY={4}>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody paddingX={10} marginBottom={10}>
            <Flex gap="20px">
                <Box>
                    <Heading size='md'>Ingredients:</Heading>
                    <UnorderedList>
                        {props.strIngredients}
                    </UnorderedList>
                    <Heading size='md' marginTop={6}>Steps:</Heading>
                    <Text>{props.strInstructions}</Text>
                </Box>
                <Box w={500}>
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