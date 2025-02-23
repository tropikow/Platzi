import { API_HOST } from '../utils/constants';

export const getPokemons = async () => {
  try {
    const response = await fetch(`${API_HOST}/pokemon?limit=50&offset=0`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getPokemonDetails = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
} 