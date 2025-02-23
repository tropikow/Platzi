export const API_HOST = 'https://pokeapi.co/api/v2';

export const getPokemons = async () => {
  const response = await fetch(`${API_HOST}/pokemon?limit=151`);
  const data = await response.json();
  return data;
}

export const getPokemonDetailsByUrl = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}