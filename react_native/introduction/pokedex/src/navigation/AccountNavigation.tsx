import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account';

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} options={{
        title: 'Favoritos'
      }}/>
    </Stack.Navigator>
  )
}

export default AccountNavigation;