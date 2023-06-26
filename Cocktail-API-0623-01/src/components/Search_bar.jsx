import {React,useState} from "react";
import {Input, Button} from '@chakra-ui/react'

const Search_Bar = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      searchDrinks();
    };
  
    // Función para buscar bebidas en la API
    const searchDrinks = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      console.log(data);
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="Buscar bebidas"
          value={searchTerm}
          onChange={handleInputChange}
          marginRight="2"
        />
        <Button type="submit">Buscar</Button>
      </form>
    );
  };
  
  export default Search_Bar;
  