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
      <Box bg={useColorModeValue('orange.200', 'orange.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'right'}>
              <Stack direction={'row'} spacing={7}>
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