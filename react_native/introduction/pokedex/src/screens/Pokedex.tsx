import { SafeAreaView, Text } from "react-native";
import { useEffect, useState } from "react";
import { PokemonClient } from 'pokenode-ts';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const pokemonClient = new PokemonClient();

  useEffect( () => {
    (async () => {
      await loadPokemons(); 
    })()    
  }, [])

  const loadPokemons = async() => {
    try {
      const response = await pokemonClient.listPokemons(0, 20);      
      setPokemons(response.results);
      console.log(response.results);
    } catch(e) {
      console.log(e);
      throw e;
    }
  };
  return (
    <SafeAreaView>
      <Text>Pokedex : {pokemons.length}</Text>
    </SafeAreaView>
  )
}

export default Pokedex;