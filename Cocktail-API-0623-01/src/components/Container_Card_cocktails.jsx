import {SimpleGrid, Button, useColorModeValue, Box, Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react'
import { useState } from 'react';
import Card_cocktail from './Card_cocktail.jsx'
import Search_Bar from './Search_bar.jsx';


function Container_cards_cocktails() {
    const [data,setData] = useState();
    

    return (
      <>
      <Box bg={useColorModeValue('orange.50', 'blue.800')}>
        <Tabs>
          <TabList>
            <Tab>Random Cocktails</Tab>
            <Tab>Looking for an specific cocktail?</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
            < Button variant='solid' colorScheme='green' onClick={() => setData(Math.random())}>Random!</Button>
              <SimpleGrid minChildWidth='280px' spacing='60px'
              justifyContent={"center"} alignContent={"center"} paddingX='10px'>
                  <Card_cocktail data={data}/>
                  <Card_cocktail data={data}/>
                  <Card_cocktail data={data}/>
                  <Card_cocktail data={data}/>
              </SimpleGrid> 
            </TabPanel>
            <TabPanel>
              <Search_Bar></Search_Bar>
              <SimpleGrid minChildWidth='280px' spacing='60px'
              justifyContent={"center"} alignContent={"center"} paddingX='10px'>
              </SimpleGrid> 
            </TabPanel>
          </TabPanels>
        </Tabs>  
      </Box>
      </>
    )
  }

export default Container_cards_cocktails;