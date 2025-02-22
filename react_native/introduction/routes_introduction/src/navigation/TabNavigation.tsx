import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: () => (
          <Icon name="home" size={24} color="black" />  
        )
      }}
      />
      <Tab.Screen name="Settings" 
      options={{
        tabBarIcon: () => (
          <Icon name="gear" size={24} color="black" />  
        )
      }}
      component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
