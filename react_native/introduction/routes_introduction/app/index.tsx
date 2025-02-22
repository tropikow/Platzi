import { Text, View, Button } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Text>Con el componente Text se puede mostrar texto en la pantalla.</Text>
      <Text>Con el componente View se puede crear un contenedor para los componentes.</Text>
      <Text>Con el componente Button se puede mostrar una imagen en la pantalla,ejemplo:</Text>
      <Button title="Click me" onPress={() => alert('Button pressed')} />
      <Text>Ademas tambien podemos con los botones redirigir a otra pantalla,ejemplo:</Text>
      <Button onPress={() => router.navigate('/about')}>Ir a la pantalla de about</Button>
    </View>
  );
}
