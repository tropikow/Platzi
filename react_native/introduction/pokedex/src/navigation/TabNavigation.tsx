import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pokedex from '../screens/Pokedex';
import Favorite from '../screens/Favorite';
import Account from '../screens/Account';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" size={size} color={color}/>
        ),
        tabBarLabel: 'Favoritos'
      }} component={Favorite} />
      <Tab.Screen name="Pokedex" options={{
        headerShown: false,        
        tabBarLabel: '',
        tabBarIcon: () => {
          return renderLogo();
        }
      }} component={Pokedex} />
      <Tab.Screen name="Account" options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" size={size} color={color} />
        ),
        tabBarLabel: 'Cuenta'
      }} component={Account} />
    </Tab.Navigator>
  )
}

const renderLogo = () => {
  return (
    <Image source={require('../assets/images/pokeball.png')} style={{ width: 75, height: 75, top: -15 }}/>
  )
}

export default TabNavigation;