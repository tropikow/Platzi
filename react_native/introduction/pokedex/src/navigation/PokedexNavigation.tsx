import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="Pokedex" component={Pokedex} options={{
        title: 'Pokedex'
      }}/>
      <Stack.Screen name="Pokemon" component={Pokemon} options={{
        title: '',        
      }}/>
    </Stack.Navigator>
  )
}

export default PokedexNavigation;