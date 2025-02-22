import { Text, View } from "react-native";
import { Link } from "expo-router";

const About = () => {
  return (
    <View>
      <Text>Esta es la pantalla de about</Text>
      <Link href="/">Ir a la pantalla de home</Link>
    </View>
  );
};

export default About;