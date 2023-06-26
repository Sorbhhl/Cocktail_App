import React from "react";
import {Box,Flex, Button, useColorModeValue, useColorMode,Stack} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  
function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleColorModeChange = () => {
    toggleColorMode();
  };

  return (
      <>
      <Box bg={useColorModeValue('orange.100', 'blue.900')} position="fixed" top={0} left={0} right={0} zIndex={10} boxShadow="md">
          <Flex h={16} alignItems={'center'} justifyContent={'right'}>
              <Stack direction={'row'}>
                  <Button onClick={handleColorModeChange}>
                      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>
              </Stack>
          </Flex>
      </Box>
      </>
  );
}

export default Nav;