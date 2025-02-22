import { View, Text, Button } from 'react-native';

const HomeScreen = (props: any) => {

  const { navigation } = props;
  
  return (
    <View>
      <Text>Home</Text>
      {/*<Button
        title="Ir a la pantalla de settings"
        onPress={() => navigation.navigate('Settings')}
      />  */}      
    </View>
  );
};

export default HomeScreen;